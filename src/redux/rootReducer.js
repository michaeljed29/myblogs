import { combineReducers } from 'redux'
import postsReducer from './posts/postsSlice'
import themeReducer from './theme/themeSlice'
import modalsReducer from './modals/modalsSlice'

export default combineReducers({
	posts: postsReducer,
	theme: themeReducer,
	modals: modalsReducer,
})
