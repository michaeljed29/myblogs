import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const Modal = ({ children, onClose, open, title, buttons, ...other }) => {
	return (
		<Dialog
			fullWidth
			open={open}
			onClose={onClose}
			aria-labelledby='form-dialog-title'
			{...other}
		>
			{title && <DialogTitle id='form-dialog-title'>{title}</DialogTitle>}
			<DialogContent>{children}</DialogContent>

			{buttons && <DialogActions>{buttons}</DialogActions>}
		</Dialog>
	)
}

export default Modal
