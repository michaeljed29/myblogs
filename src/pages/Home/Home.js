import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/posts/postsDuck'
import { Container } from '@material-ui/core'

const Home = () => {
	const dispatch = useDispatch()
	const { data } = useSelector((state) => state.posts)

	useEffect(() => {
		dispatch(getPosts())
	}, [])

	return (
		<section>
			<Container>
				<h1>Home</h1>
			</Container>
		</section>
	)
}

export default Home
