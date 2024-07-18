import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import loaderReducer from "./features/loaderSlice";
import pokemonInfoReducer from "./features/pokemonInfoSlice";
import catchReducer from "./features/catchSlice";
import inProgressReducer from "./features/inProgressSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  modal: modalReducer,
  loader: loaderReducer,
  pokemonInfo: pokemonInfoReducer,
  catching: catchReducer,
  catchingProgress: inProgressReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["catching"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type AppStore = typeof store;
// export type RootState = ReturnType<AppStore["getState"]>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
