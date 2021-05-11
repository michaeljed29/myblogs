import React, { useEffect } from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";

import { addPost, editPost } from "../../../redux/posts/postsSlice";

const PostForm = ({ handleCloseModal }) => {
	const { addSuccess, addLoading, editPostLoading, current } = useSelector(
		(state) => state.posts
	);
	const dispatch = useDispatch();
	const classes = useStyles();

	const formik = useFormik({
		initialValues: current || {
			title: "",
			content: "",
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Required"),
			content: Yup.string().required("Required"),
		}),
		onSubmit: (values, onSubmitProps) => {
			if (current) {
				dispatch(
					editPost({
						data: values,
						id: current._id,
						onSuccess() {
							handleCloseModal();
							handleReset();
						},
					})
				);
				return;
			}

			dispatch(
				addPost({
					data: values,
					onSuccess() {
						handleCloseModal();
						handleReset();
					},
				})
			);
		},
	});

	const {
		handleChange,
		handleSubmit,
		values,
		touched,
		errors,
		handleBlur,
		handleReset,
	} = formik;

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<TextField
				onChange={handleChange}
				id="title"
				name="title"
				label="Title"
				helperText={touched.title && errors.title ? errors.title : ""}
				fullWidth
				error={touched.title && errors.title ? true : false}
				{...formik.getFieldProps("title")}
			/>
			<TextField
				onChange={handleChange}
				id="content"
				name="content"
				label="Content"
				helperText={touched.content && errors.content ? errors.content : ""}
				fullWidth
				multiline
				error={touched.content && errors.content ? true : false}
				rows={6}
				{...formik.getFieldProps("content")}
			/>
			<div className={classes.buttonContainer}>
				<Button onClick={handleCloseModal} color="primary">
					Cancel
				</Button>
				<div className={classes.wrapper}>
					<Button type="submit" color="primary" disabled={addLoading}>
						{current ? "Update" : "Add"}
					</Button>
					{!current && addLoading && (
						<CircularProgress size={24} className={classes.buttonProgress} />
					)}
					{current && editPostLoading && (
						<CircularProgress size={24} className={classes.buttonProgress} />
					)}
				</div>
			</div>
		</form>
	);
};

export default PostForm;
