import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit: "",
  selectedItem: [],
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    resetSelectedItem: (state) => {
      state.selectedItem = [];
      state.edit = "";
    },
  },
});

export const { setEdit, setSelectedItem, resetSelectedItem } =
  editSlice.actions;
export default editSlice.reducer;
