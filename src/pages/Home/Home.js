import React, { useEffect, useState } from 'react'
import { get } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/posts/postsSlice'
import { setIsOpenPostForm } from '../../redux/modals/modalsSlice'
import { Container, Grid, Fab, Button } from '@material-ui/core'
import BlogCard from '../../components/BlogCard/BlogCard'
import AddIcon from '@material-ui/icons/Add'
import PostForm from '../../components/Forms/PostForm/PostForm'
import Modal from '../../components/Modal/Modal'
import Loader from '../../components/Loader/Loader'
import useStyles from './styles'

const Home = () => {
	// const [isOpen, setIsOpen] = useState(false)
	const dispatch = useDispatch()
	const classes = useStyles()
	const state = useSelector((state) => state)
	const { data: posts, loading } = get(state, 'posts', {})
	const { isOpen } = get(state, 'modals.postForm', {})

	useEffect(() => {
		dispatch(getPosts())
	}, [])

	const onAdd = () => {
		dispatch(setIsOpenPostForm(true))
	}

	const handleCloseModal = () => {
		dispatch(setIsOpenPostForm(false))
	}

	return (
		<section>
			<Container maxWidth='lg'>
				<Modal
					title='Add Post'
					open={isOpen}
					maxWidth='md'
					onClose={handleCloseModal}
				>
					<PostForm handleCloseModal={handleCloseModal} />
				</Modal>

				{loading ? (
					<div className={classes.loaderContainer}>
						<Loader />
					</div>
				) : (
					<Grid container spacing={2} alignItems='center'>
						{posts.map((post) => (
							<Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
								<BlogCard post={post} />
							</Grid>
						))}
					</Grid>
				)}
				<Fab
					className={classes.fab}
					color='primary'
					aria-label='add'
					onClick={onAdd}
				>
					<AddIcon />
				</Fab>
			</Container>
		</section>
	)
}

export default Home
