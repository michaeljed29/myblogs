import React from 'react'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import useStyles from './styles'

const BlogCard = ({ post }) => {
	const classes = useStyles()

	const { title, content } = post

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label='recipe' className={classes.avatar}>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title='Shrimp and Chorizo Paella'
				subheader='September 14, 2016'
			/>
			<CardMedia
				className={classes.media}
				image='/static/images/cards/paella.jpg'
				title='Paella dish'
			/>
			<CardContent>
				<Typography className={classes.title} variant='body1'>
					{title}
				</Typography>
				<Typography variant='body2' color='textSecondary' component='p'>
					{content}
				</Typography>
			</CardContent>
			<CardActions disableSpacing className={classes.cardActions}>
				<IconButton
					color='primary'
					className='like-btn'
					aria-label='add to favorites'
				>
					<FavoriteIcon />
				</IconButton>
				<div className={classes.actionsSpace}></div>
				<IconButton className='edit-btn' aria-label='edit'>
					<EditIcon />
				</IconButton>
				<IconButton className='delete-btn' aria-label='delete'>
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	)
}

export default BlogCard
