import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  id: "",
  name: "",
  email: "",
  token: "",
  isLogged: false,
  isAdmin: false,
};

// Асинхронное действие для получения данных пользователя
export const getUserData = createAsyncThunk(
  "user/infor",
  async (_, { getState }) => {
    try {
      const state = getState();
      const token = state.user.token;
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };
 
      const response = await axios.get("/user/infor", config);
      return response.data;
    } catch (error) {
      throw error.response.data.msg;
    }
  }
);

// Действие для обновления access token
export const updateAccessToken = (accessToken) => {
  return {
    type: "user/updateAccessToken",
    payload: accessToken,
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      const { id, username, email, role } = action.payload;
      state.id = id;
      state.name = username;
      state.email = email;
      state.isLogged = true;
      state.isAdmin = role === 1 ? true : false;
    });
    builder.addCase("user/updateAccessToken", (state, action) => {
      state.token = action.payload;
    });
  },
});

export default userSlice.reducer;
