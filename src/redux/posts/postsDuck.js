export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const getPosts = () => ({
	type: GET_POSTS,
})

export const getPostsSuccess = (posts) => ({
	type: GET_POSTS_SUCCESS,
	payload: posts,
})

export const getPostsFail = (error) => ({
	type: GET_POSTS_FAIL,
	payload: error,
})

const initialState = {
	data: [],
	loading: false,
	error: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS: {
			return {
				...state,
				loading: true,
			}
		}
		case GET_POSTS_SUCCESS:
			return {
				...state,
				error: null,
				loading: false,
				data: action.payload,
			}
		case GET_POSTS_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
