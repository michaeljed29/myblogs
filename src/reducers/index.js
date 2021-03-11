import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import utilReducer from "./utilReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const blogPersistConfig = {
  key: "blog",
  storage: storage,
  whitelist: ["blogs"],
};

export default combineReducers({
  blog: persistReducer(blogPersistConfig, blogReducer),
  util: utilReducer,
});
