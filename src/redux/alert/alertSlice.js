import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const alertSlice = createSlice({
	name: "alerts",
	initialState,
	reducers: {
		setAlert(state, { payload }) {
			state.push(payload);
		},
		removeAlert(state, { payload }) {
			console.log("payload", payload);
		},
	},
	// extraReducers: (builder) => {
	// 	builder.addCase(setAlert, (state) => {
	// 		console.log("callback");
	// 	});
	// },
});

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;
