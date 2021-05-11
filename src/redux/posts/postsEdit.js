export const postEditState = {
	editPostLoading: false,
	editPostError: null,
};

export default {
	editPost: (state) => {
		state.editPostLoading = true;
	},
	editPostSuccess: (state, { payload }) => {
		const newPosts = state.data.map((post) =>
			post._id === payload._id ? payload : post
		);

		state.data = newPosts;
		state.editPostLoading = false;
		state.editPostError = null;
	},
	editPostFail: (state, { payload }) => {
		state.editPostError = payload;
		state.editPostLoading = false;
	},
};
