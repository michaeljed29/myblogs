import axios from 'axios'

const url = 'http://localhost:5000'

export const getPosts = () => axios.get(`${url}/api/posts`)

export const addPost = (data) => {
	return axios.post(`${url}/api/posts`, data, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
