import { combineReducers } from 'redux'
import postsReducer from './posts/postsDuck'

export default combineReducers({
	posts: postsReducer,
})
