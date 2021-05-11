import axios from "axios";

const url = "http://localhost:5000";

export const getPosts = () => axios.get(`${url}/api/posts`);

export const addPost = (data) => {
	return axios.post(`${url}/api/posts`, data, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const deletePost = (id) => {
	return axios.delete(`${url}/api/posts/${id}`);
};

export const editPost = ({ data, id }) => {
	return axios.patch(`${url}/api/posts/${id}`, data, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};
