import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	postForm: {
		isOpen: false,
	},
	deleteConfirmation: {
		isOpen: false,
	},
};

const modalsSlice = createSlice({
	name: "modals",
	initialState,
	reducers: {
		setIsOpenPostForm: (state, { payload }) => {
			state.postForm.isOpen = payload;
		},
		setIsOpenDeleteConfirmation: (state, { payload }) => {
			state.deleteConfirmation.isOpen = payload;
		},
	},
});

export const { setIsOpenPostForm, setIsOpenDeleteConfirmation } =
	modalsSlice.actions;

export default modalsSlice.reducer;
