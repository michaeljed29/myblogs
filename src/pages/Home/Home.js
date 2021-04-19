import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/posts/postsDuck'

const Home = () => {
	const dispatch = useDispatch()
	const { data } = useSelector((state) => state.posts)

	useEffect(() => {
		dispatch(getPosts())
	}, [])

	return <div>Home</div>
}

export default Home
