import { configureStore, combineReducers } from "@reduxjs/toolkit";
import servicesReducer from "./servicesSlice";
import specialistsSlice from "./specialistsSlice";
import infoSlice from "./infoSlice";
import userSlice from "./userSlice";
import editSlice from "./editSlice";
const rootReducer = combineReducers({
  services: servicesReducer,
  specialists: specialistsSlice,
  info: infoSlice,
  user: userSlice,
  edit: editSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
