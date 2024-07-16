import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
