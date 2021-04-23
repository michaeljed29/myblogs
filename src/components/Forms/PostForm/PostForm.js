import React, { useEffect } from 'react'
import { TextField, Button, CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { addPost } from '../../../redux/posts/postsSlice'

const PostForm = ({ handleCloseModal }) => {
	const { addSuccess, addLoading } = useSelector((state) => state.posts)
	const dispatch = useDispatch()
	const classes = useStyles()

	const formik = useFormik({
		initialValues: {
			title: '',
			content: '',
		},
		validationSchema: Yup.object({
			title: Yup.string().required('Required'),
			content: Yup.string().required('Required'),
		}),
		onSubmit: (values, onSubmitProps) => {
			dispatch(addPost(values))
		},
	})

	const {
		handleChange,
		handleSubmit,
		values,
		touched,
		errors,
		handleBlur,
		handleReset,
	} = formik

	useEffect(() => {
		if (addSuccess) {
			handleReset()
		}
	}, [addSuccess])

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<TextField
				onChange={handleChange}
				id='title'
				name='title'
				label='Title'
				helperText={touched.title && errors.title ? errors.title : ''}
				fullWidth
				error={touched.title && errors.title ? true : false}
				{...formik.getFieldProps('title')}
			/>
			<TextField
				onChange={handleChange}
				id='content'
				name='content'
				label='Content'
				helperText={touched.content && errors.content ? errors.content : ''}
				fullWidth
				multiline
				error={touched.content && errors.content ? true : false}
				rows={6}
				{...formik.getFieldProps('content')}
			/>
			<div className={classes.buttonContainer}>
				<Button onClick={handleCloseModal} color='primary'>
					Cancel
				</Button>
				<div className={classes.wrapper}>
					<Button type='submit' color='primary' disabled={addLoading}>
						Add
					</Button>
					{addLoading && (
						<CircularProgress size={24} className={classes.buttonProgress} />
					)}
				</div>
			</div>
		</form>
	)
}

export default PostForm
