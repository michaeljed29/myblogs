import { combineReducers } from 'redux'
import postsReducer from './posts/postsSlice'

export default combineReducers({
	posts: postsReducer,
})
