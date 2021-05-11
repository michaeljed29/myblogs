import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import { Button } from "@material-ui/core";
import { setIsOpenDeleteConfirmation } from "../../redux/modals/modalsSlice";
import { removeCurrent, deletePost } from "../../redux/posts/postsSlice";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		margin: theme.spacing(1),
		position: "relative",
	},
	buttonProgress: {
		position: "absolute",
		top: "50%",
		left: "50%",
		marginTop: -12,
		marginLeft: -12,
	},
}));

const DeleteConfirmationModal = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const { isOpen } = useSelector((state) => state.modals.deleteConfirmation);

	const { current, deleteSuccess, deleteLoading } = useSelector(
		(state) => state.posts
	);

	const onClose = () => {
		dispatch(setIsOpenDeleteConfirmation(false));
		dispatch(removeCurrent());
	};

	const onConfirm = () => {
		dispatch(deletePost({ id: current._id }));
	};

	const buttons = [
		<Button color="primary" onClick={onClose}>
			Cancel
		</Button>,
		<div className={classes.wrapper}>
			<Button color="primary" onClick={onConfirm} disabled={deleteLoading}>
				Yes
			</Button>
			{deleteLoading && (
				<CircularProgress size={24} className={classes.buttonProgress} />
			)}
		</div>,
	];

	return (
		<Modal title="Post Delete" open={isOpen} buttons={buttons}>
			Are you sure you want to delete?
		</Modal>
	);
};

export default DeleteConfirmationModal;
