export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const getPosts = () => ({
	type: GET_POSTS,
})

const initialState = {
	data: [],
	loading: false,
	error: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}
