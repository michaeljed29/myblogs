import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
// import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from "../redux/rootSaga";
import { setAlert } from "./alert/alertSlice";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
			middleware
		),
});

sagaMiddleware.run(rootSaga);

store.dispatch(setAlert({ id: "1", type: "success", msg: "nice one" }));

export default store;
