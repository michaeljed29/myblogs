import { createSlice } from "@reduxjs/toolkit";
import postEditReducer, { postEditState } from "./postsEdit";

const initialState = {
	data: [],
	loading: false,
	error: null,
	addLoading: false,
	addError: null,
	addSuccess: false,
	deleteLoading: false,
	deleteError: null,
	deleteSuccess: false,
	current: null,
	...postEditState,
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		getPosts: (state) => {
			state.loading = true;
		},
		getPostsSuccess: (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.data = payload;
		},
		getPostsFail: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		addPost: (state) => {
			state.addLoading = true;
			state.addSuccess = false;
		},
		addPostSuccess: (state, { payload }) => {
			const newPosts = [...state.data, payload];
			state.addLoading = false;
			state.data = newPosts;
			state.addSuccess = true;
		},
		addPostFail: (state, { payload }) => {
			state.addLoading = false;
			state.addError = payload;
			state.addSuccess = false;
		},
		setCurrent: (state, { payload }) => {
			state.current = payload;
		},
		removeCurrent: (state) => {
			state.current = null;
		},
		deletePost: (state) => {
			state.deleteLoading = true;
			state.deleteSuccess = false;
		},
		deleteSuccess: (state) => {
			const newPosts = state.data.filter(
				(post) => post._id !== state.current._id
			);
			state.deleteError = null;
			state.deleteLoading = false;
			state.current = null;
			state.data = newPosts;
			state.deleteSuccess = true;
		},
		deleteError: (state, { payload }) => {
			state.deleteLoading = false;
			state.deleteError = payload;
		},
		...postEditReducer,
	},
});

export const {
	getPosts,
	getPostsSuccess,
	getPostsFail,
	addPost,
	addPostSuccess,
	addPostFail,
	setCurrent,
	removeCurrent,
	deletePost,
	deleteSuccess,
	deleteError,
	editPost,
	editPostSuccess,
	editPostFail,
} = postsSlice.actions;

export default postsSlice.reducer;
