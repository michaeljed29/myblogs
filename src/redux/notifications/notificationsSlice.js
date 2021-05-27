import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import Fade from "@material-ui/core/Fade";

const initialState = [];

const notificationsSlice = createSlice({
	name: "notifications",
	initialState,
	reducers: {
		enqueueSnackbar: (state, { payload }) => {
			const key = uuidv4();
			const defaultOptions = {
				anchorOrigin: {
					vertical: "top",
					horizontal: "center",
				},
				TransitionComponent: Fade,
				variant: "default",
			};

			const notification = {
				message: payload.message,
				key,
				options: {
					...defaultOptions,
					key,
					variant: payload.type,
				},
			};

			return [...state, notification];
		},
		closeSnackbar: (state, { payload }) => {
			const newNotifications = state.map((notification) =>
				notification.key === payload ? { ...notification, dismissed: true } : {}
			);

			return newNotifications;
		},
		removeSnackbar: (state, { payload }) => {
			return state.filter((notification) => notification.key !== payload);
		},
	},
});

export const { enqueueSnackbar, closeSnackbar, removeSnackbar } =
	notificationsSlice.actions;

export default notificationsSlice.reducer;
