import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: [],
	loading: false,
	error: null,
	addLoading: false,
	addError: null,
	addSuccess: false,
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts: (state) => {
			state.loading = true
		},
		getPostsSuccess: (state, { payload }) => {
			state.loading = false
			state.error = null
			state.data = payload
		},
		getPostsFail: (state, { payload }) => {
			state.loading = false
			state.error = payload
		},
		addPost: (state) => {
			state.addLoading = true
			state.addSuccess = false
		},
		addPostSuccess: (state, { payload }) => {
			const newPosts = [...state.data, payload]
			state.addLoading = false
			state.data = newPosts
			state.addSuccess = true
		},
		addPostFail: (state, { payload }) => {
			state.addLoading = false
			state.addError = payload
			state.addSuccess = false
		},
	},
})

export const {
	getPosts,
	getPostsSuccess,
	getPostsFail,
	addPost,
	addPostSuccess,
	addPostFail,
} = postsSlice.actions

export default postsSlice.reducer
