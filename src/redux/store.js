import { createStore, applyMiddleware } from 'redux'
import reducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = []

const store = createStore(
	reducer,
	{},
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
