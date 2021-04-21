import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: [],
	loading: false,
	error: null,
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts: (state) => {
			state.loading = true
		},
		getPostsSuccess: (state, { payload }) => {
			state.error = null
			state.data = payload
		},
		getPostsFail: (state, { payload }) => {
			state.loading = false
			state.error = payload
		},
	},
})

export const { getPosts, getPostsSuccess, getPostsFail } = postsSlice.actions

export default postsSlice.reducer
