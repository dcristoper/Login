import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./persistReducer";

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

export const persistor = persistStore(store);
export default store;
