import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  info: [],
  loading: false,
  error: null,
};

export const fetchInfo = createAsyncThunk(
  "info/fetchInfo",
  async () => {
    try {
      const response = await axios.get("/api/useful");
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const deleteInfo = createAsyncThunk(
  "Info/deleteInfo",
  async (infoId) => {
    try {
      await axios.delete(`/api/useful/${infoId}`);
      return infoId;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const updateInfo = createAsyncThunk(
  "Info/updateInfo",
  async ({ infoId, updatedInfo }) => {
    try {
      const response = await axios.put(
        `/api/useful/${infoId}`,
        updatedInfo
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

const infoSlice = createSlice({
  name: "useful",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Обрабатываем успешный результат получения данных
    builder.addCase(fetchInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.info = action.payload;
    });
    builder.addCase(fetchInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // DELETE Обрабатываем успешный результат delete данных

    builder.addCase(deleteInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.info.filter((info) => info.id !== action.payload.id);
    });
    builder.addCase(deleteInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // UPDATE Обрабатываем успешный результат update данных

    builder.addCase(updateInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateInfo.fulfilled, (state, action) => {
      state.loading = false;
      const updatedInfo = action.payload;
      const index = state.info.findIndex(
        (info) => info.id === updatedInfo.id
      );
      if (index !== -1) {
        state.services[index] = updatedInfo;
      }
    });
    builder.addCase(updateInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default infoSlice.reducer;
