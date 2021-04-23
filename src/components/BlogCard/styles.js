import { red, blue, green } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	root: {
		maxWidth: '100%',
	},
	title: {
		fontWeight: 500,
		marginBottom: '0.3125rem',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	avatar: {
		backgroundColor: green[500],
	},
	actionsSpace: {
		flex: 1,
	},
	cardActions: {
		'& .edit-btn': {
			color: blue[300],
		},
		'& .delete-btn': {
			color: red[300],
		},
	},
}))
