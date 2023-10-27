import sqlite3 from "sqlite3";
import { open } from "sqlite";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Создание соединения с базой данных
const openDatabase = async () => {
  return open({
    filename: "../db/mirastom.db",
    driver: sqlite3.Database,
  });
};

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      const db = await openDatabase();

      // Проверка существования пользователя по email
      const query = "SELECT * FROM users WHERE email = ?";
      const row = await db.get(query, [email]);

      if (row) {
        return res.status(400).json({ msg: "Такой email уже существует." });
      }

      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "Наименьшая длина пароля равна 6-ти символам." });
      }

      // Пароль Encryption
      const passwordHash = await bcrypt.hash(password, 10);

      // Вставка нового пользователя в базу данных
      const insertQuery =
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
      const result = await db.run(insertQuery, [
        name,
        email,
        passwordHash,
        role,
      ]);

      // Создаем jsonwebtoken для аутентификации
      const userId = result.lastID;
      const user = { id: userId };

      const accessToken = createAccessToken(user);
      const refreshToken = createRefreshToken(user);

      res.cookie("refreshtoken", refreshToken, {
        httpOnly: true,
        path: "/user/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      });

      res.json({ accessToken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const db = await openDatabase();

      const query = "SELECT * FROM users WHERE email = ?";
      const row = await db.get(query, [email]);

      if (!row) {
        return res
          .status(400)
          .json({ msg: "Такой пользователь не существует." });
      }

      const isMatch = await bcrypt.compare(password, row.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Неправильный пароль." });
      }

      // Если логин успешен, создаем access token и refresh token
      const user = { id: row.id };

      const accessToken = createAccessToken(user);
      const refreshToken = createRefreshToken(user);

      res.cookie("refreshtoken", refreshToken, {
        httpOnly: true,
        path: "/user/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      });

      res.json({ accessToken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      return res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshToken: async (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;

      if (!rf_token)
        return res.status(400).json({ msg: "Пожалуйста Login или Register" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
          return res.status(400).json({ msg: "Пожалуйста Login или Register" });

        const accessToken = createAccessToken({ id: user.id });

        res.json({ accessToken });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const db = await openDatabase();

      const query = "SELECT * FROM users WHERE id = ?";
      const row = await db.get(query, [req.user.id]);

      if (!row) {
        return res
          .status(400)
          .json({ msg: "Такой пользователь не существует." });
      }

      const user = {
        id: row.id,
        username: row.name,
        email: row.email,
        role: row.role,
      };
      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "11m" });
};

const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

export default userCtrl;
