import axios from 'axios'

const url = process.env.SERVER_URL;

export const getPosts = () => axios.get(`${url}/posts`)
