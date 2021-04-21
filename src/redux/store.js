import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
// import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from '../redux/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = configureStore({
	reducer,
	middleware,
})

sagaMiddleware.run(rootSaga)

export default store
