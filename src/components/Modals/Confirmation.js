import React from "react";
import { Button } from "@material-ui/core";
import Modal from "../Modal/Modal";

const Confirmation = ({ isOpen, onClose, onConfirm, children, title }) => {
	const buttons = [
		<Button color="primary" onClick={onClose}>
			Cancel
		</Button>,
		<Button color="primary" onClick={onConfirm}>
			Yes
		</Button>,
	];

	return (
		<Modal open={isOpen} title={title} buttons={buttons}>
			{children}
		</Modal>
	);
};

export default Confirmation;
