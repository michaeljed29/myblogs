import { takeLatest, all, call, put } from 'redux-saga/effects'
import { GET_POSTS, getPostsSuccess, getPostsFail } from './postsDuck'
import * as api from '../../api/posts'

function* handleGetPosts() {
	try {
		const { data } = yield call(api.getPosts)

		yield put(getPostsSuccess(data))
	} catch (error) {
		yield put(getPostsFail(error.message))
	}
}

export function* watchGetPosts() {
	yield takeLatest(GET_POSTS, handleGetPosts)
}

export default function* postsSagas() {
	yield all([watchGetPosts()])
}
