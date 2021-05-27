import { combineReducers } from "redux";
import postsReducer from "./posts/postsSlice";
import themeReducer from "./theme/themeSlice";
import modalsReducer from "./modals/modalsSlice";
import alertReducer from "./alert/alertSlice";
import notificationsReducer from "./notifications/notificationsSlice";

export default combineReducers({
	posts: postsReducer,
	theme: themeReducer,
	modals: modalsReducer,
	alerts: alertReducer,
	notifications: notificationsReducer,
});
