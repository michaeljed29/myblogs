import React from 'react'
import { TextField, Button } from '@material-ui/core'
import useStyles from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const PostForm = ({ handleCloseModal }) => {
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
		onSubmit: (values) => {
			console.log('values', values)
		},
	})

	const {
		handleChange,
		handleSubmit,
		values,
		touched,
		errors,
		handleBlur,
	} = formik
	const { title, content } = values
	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<TextField
				onChange={handleChange}
				name='title'
				label='Title'
				helperText={touched.title && errors.title ? errors.title : ''}
				fullWidth
				error={touched.title && errors.title ? true : false}
				onBlur={handleBlur}
				values={title}
			/>
			<TextField
				onChange={handleChange}
				name='content'
				label='Content'
				helperText={touched.content && errors.content ? errors.content : ''}
				fullWidth
				multiline
				error={touched.content && errors.content ? true : false}
				onBlur={handleBlur}
				values={content}
				rows={6}
			/>
			<div className={classes.buttonContainer}>
				<Button onClick={handleCloseModal} color='primary'>
					Cancel
				</Button>
				<Button type='submit' color='primary'>
					Add
				</Button>
			</div>
		</form>
	)
}

export default PostForm
