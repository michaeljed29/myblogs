import { takeLatest, all, call, put } from 'redux-saga/effects'
import { getPosts, getPostsSuccess, getPostsFail } from './postsSlice'
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
	yield takeLatest(getPosts.type, handleGetPosts)
}

export default function* postsSagas() {
	yield all([watchGetPosts()])
}
