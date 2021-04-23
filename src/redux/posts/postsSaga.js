import { takeLatest, all, call, put } from 'redux-saga/effects'
import {
	getPosts,
	getPostsSuccess,
	getPostsFail,
	addPost,
	addPostSuccess,
	addPostFail,
} from './postsSlice'
import * as api from '../../api/posts'

function* handleGetPosts() {
	try {
		const { data } = yield call(api.getPosts)

		yield put(getPostsSuccess(data))
	} catch (error) {
		yield put(getPostsFail(error.message))
	}
}

function* handleAddPost({ payload }) {
	try {
		const { data } = yield call(api.addPost, payload)

		yield put(addPostSuccess(data))
	} catch (error) {
		console.log(error)
		yield put(addPostFail(error.message))
	}
}

function* watchAddPost() {
	yield takeLatest(addPost.type, handleAddPost)
}

function* watchGetPosts() {
	yield takeLatest(getPosts.type, handleGetPosts)
}

export default function* postsSagas() {
	yield all([watchGetPosts(), watchAddPost()])
}
