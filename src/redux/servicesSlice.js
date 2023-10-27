import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  services: [],
  loading: false,
  error: null,
};

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    try {
      const response = await axios.get("/api/services");

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const deleteService = createAsyncThunk(
  "Services/deleteService",
  async (serviceId) => {
    try {
      await axios.delete(`/api/services/${serviceId}`);
      return serviceId;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const updateService = createAsyncThunk(
  "Services/updateService",
  async ({ serviceId, updatedService }) => {
    try {
      const response = await axios.put(
        `/api/services/${serviceId}`,
        updatedService
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    // Обрабатываем успешный результат получения данных
    builder.addCase(fetchServices.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.loading = false;
      state.services = action.payload;
    });
    builder.addCase(fetchServices.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // DELETE Обрабатываем успешный результат delete данных

    builder.addCase(deleteService.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteService.fulfilled, (state, action) => {
      state.loading = false;
      state.services.filter((service) => service.id !== action.payload.id);
    });
    builder.addCase(deleteService.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // UPDATE Обрабатываем успешный результат update данных

    builder.addCase(updateService.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateService.fulfilled, (state, action) => {
      state.loading = false;
      const updatedService = action.payload;
      const index = state.services.findIndex((service)=> service.id === updatedService.id)
      if (index !== -1) {
        state.services[index] = updatedService
      }
    });
    builder.addCase(updateService.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default servicesSlice.reducer;
