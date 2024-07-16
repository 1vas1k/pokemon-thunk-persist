import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import loremReducer from "./features/loremSlice";
import modalReducer from "./features/modalSlice";
import loaderReducer from "./features/loaderSlice";
import pokemonInfoReducer from ".//features/pokemonInfoSlice";

const rootReducer = combineReducers({
  modal: modalReducer,
  loader: loaderReducer,
  pokemonInfo: pokemonInfoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppStore = typeof store;
// export type RootState = ReturnType<AppStore["getState"]>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
