import { all } from 'redux-saga/effects'
import postsSagas from './posts/postsSaga'

export default function* rootSaga() {
	yield all([postsSagas()])
}
