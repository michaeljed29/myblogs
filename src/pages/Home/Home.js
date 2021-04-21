import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/posts/postsSlice'
import { Container, Grid, Fab, Button } from '@material-ui/core'
import BlogCard from '../../components/BlogCard/BlogCard'
import AddIcon from '@material-ui/icons/Add'
import PostForm from '../../components/Forms/PostForm/PostForm'
import Modal from '../../components/Modal/Modal'
import useStyles from './styles'

const Home = () => {
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useDispatch()
	const classes = useStyles()
	const { data: posts } = useSelector((state) => state.posts)

	useEffect(() => {
		dispatch(getPosts())
	}, [])

	const onAdd = () => {
		setIsOpen(true)
	}

	const handleCloseModal = () => {
		setIsOpen(false)
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
				<Grid container spacing={2} alignItems='center'>
					{posts.map((post) => (
						<Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
							<BlogCard post={post} />
						</Grid>
					))}
				</Grid>
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
