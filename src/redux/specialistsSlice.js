import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  specialists: [],
  loading: false,
  error: null,
};

export const fetchSpecialists = createAsyncThunk(
  "specialists/fetchSpecialists",
  async () => {
    try {
      const response = await axios.get("/api/specialists"); 

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);
const specialistsSlice = createSlice({
  name: "specialists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Обрабатываем успешный результат получения данных
    builder.addCase(fetchSpecialists.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchSpecialists.fulfilled, (state, action) => {
      state.loading = false;
      state.specialists = action.payload;
    });
    builder.addCase(fetchSpecialists.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default specialistsSlice.reducer;
