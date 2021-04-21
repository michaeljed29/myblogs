import { combineReducers } from 'redux'
import postsReducer from './posts/postsSlice'
import themeReducer from './theme/themeSlice'

export default combineReducers({
	posts: postsReducer,
	theme: themeReducer,
})
