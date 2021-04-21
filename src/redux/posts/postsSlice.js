import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: [],
	loading: false,
	error: null,
}

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts: (state) => {
			return { loading: true }
		},
		getPostsSuccess: (state, { payload }) => {
			return { loading: false, error: null, data: payload }
		},
		getPostsFail: (state, { payload }) => {
			return { loading: false, error: payload }
		},
	},
})

export const { getPosts, getPostsSuccess, getPostsFail } = postsSlice.actions

export default postsSlice.reducer
