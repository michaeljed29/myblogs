import { takeLatest, all, call, put } from "redux-saga/effects";
import {
	getPosts,
	getPostsSuccess,
	getPostsFail,
	addPost,
	addPostSuccess,
	addPostFail,
	deletePost,
	deleteSuccess,
	deleteError,
	editPost,
	editPostSuccess,
	editPostFail,
} from "./postsSlice";
import { enqueueSnackbar } from "../notifications/notificationsSlice";
import { setIsOpenDeleteConfirmation } from "../modals/modalsSlice";
import * as api from "../../api/posts";
import { omit } from "lodash";

function* handleGetPosts() {
	try {
		const { data } = yield call(api.getPosts);

		yield put(getPostsSuccess(data));
	} catch (error) {
		yield put(getPostsFail(error.message));
	}
}

function* handleAddPost({ payload }) {
	try {
		const { data } = yield call(api.addPost, payload.data);

		yield put(addPostSuccess(data));
		yield call(payload.onSuccess);
		yield put(
			enqueueSnackbar({ message: "Post Successfully added", type: "success" })
		);
	} catch (error) {
		yield put(addPostFail(error.message));
	}
}

function* handleDeletePost({ payload }) {
	try {
		const { data } = yield call(api.deletePost, payload.id);
		yield put(deleteSuccess(data));
		yield put(setIsOpenDeleteConfirmation(false));
		yield put(
			enqueueSnackbar({ message: "Post successfully deleted", type: "success" })
		);
	} catch (error) {
		yield put(deleteError(error.message));
	}
}

function* handleEditPost({ payload }) {
	try {
		const { data } = yield call(api.editPost, {
			data: omit(payload.data, ["_id", "__v"]),
			id: payload.id,
		});

		yield put(editPostSuccess(data));
		yield call(payload.onSuccess);
		yield put(
			enqueueSnackbar({ message: "Post successfully updated", type: "success" })
		);
	} catch (error) {
		yield put(editPostFail(error.message));
	}
}

function* watchAddPost() {
	yield takeLatest(addPost.type, handleAddPost);
}

function* watchGetPosts() {
	yield takeLatest(getPosts.type, handleGetPosts);
}

function* watchDeletePost() {
	yield takeLatest(deletePost.type, handleDeletePost);
}

function* watchEditPost() {
	yield takeLatest(editPost.type, handleEditPost);
}

export default function* postsSagas() {
	yield all([
		watchGetPosts(),
		watchAddPost(),
		watchDeletePost(),
		watchEditPost(),
	]);
}
