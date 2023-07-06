import { combineReducers } from "redux";
import postsSlice from "./Reducer.js";
import contactUserSlice from "./ContactsSlice.js";
import getMessageSlice from "./MessageSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducer = combineReducers({
  users: postsSlice,
  contacts: contactUserSlice,
  message: getMessageSlice,
});

const contactPersistConfig = {
  key: "contact",
  storage: storage,
  whitelist: ["contacts", "message"],
};

export const persistedReducer = persistReducer(contactPersistConfig, reducer);
