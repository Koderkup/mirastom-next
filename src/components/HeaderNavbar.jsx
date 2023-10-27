import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import ReactModal from "../../../ReactModal/ReactModal";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import s from "../styles/headerNavbar.module.scss";
import axios from "axios";
import { updateAccessToken, getUserData } from "../redux/userSlice";
// import Register from "../../register/Register";
// import Login from "../../login/Login";

const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logForm, setLogForm] = useState(true);
  const [regForm, setRegForm] = useState(false);
  const dispatch = useDispatch();
  const {pathname} = useRouter();
  // const userData = useSelector((state) => state.user);
  // const { id, name, email, isLogged, isAdmin } = userData;
  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };
  const handleLogin = () => {
    setRegForm(false);
    setLogForm(true);
  };

  const handleRegister = () => {
    setRegForm(true);
    setLogForm(false);
  };
  // useEffect(() => {
  //   const firstLogin = localStorage.getItem("firstLogin");
  //   if (firstLogin) {
  //     const refreshToken = async () => {
  //       try {
  //         const response = await axios.get("/user/refresh_token");
  //         const { accesstoken } = response.data;
  //         dispatch(updateAccessToken(accesstoken));
  //         dispatch(getUserData());
  //         setTimeout(() => {
  //           refreshToken();
  //         }, 10 * 60 * 1000);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     refreshToken();
  //   }
  // }, [dispatch]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={s.header_navbar}>
      <div className={s.header_navbar__logo}>
        <img src="/assets/logo_mirastom.svg" className={s.logo} />
      </div>
      <div className={s.header_navbar__links}>
        <Link className={pathname === "/" ? s.active : null} href="/">
          Главная
        </Link>
        <Link className={pathname === "/works" ? s.active : null} href="/works">
          Наши работы
        </Link>
        <Link className={pathname === "/about" ? s.active : null} href="/about">
          О клинике
        </Link>
        <Link
          className={pathname === "/contacts" ? s.active : null}
          href="/contacts"
        >
          Контакты
        </Link>
        <Link className={pathname === "/reviews" ? s.active : null} href="/reviews">
          Отзывы<sup className={s.sup}>скоро</sup>
        </Link>
      </div>
      {/* <ButtonOrder onClick={!isLogged ? openModal : logoutUser}>
        {!isLogged ? "Войти" : "Выйти"}
      </ButtonOrder>
      <ReactModal
        isOpen={isOpen}
        onClose={closeModal}
        contentLabel="форма редактирования"
      >
        {logForm && <Login handleRegister={handleRegister} />}
        {regForm && <Register handleLogin={handleLogin} />}
      </ReactModal> */}
    </div>
  );
};

export default HeaderNavbar;
