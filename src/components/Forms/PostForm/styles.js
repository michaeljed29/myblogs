import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	form: {
		'& > *': {
			margin: '0.625rem 0',
		},
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'flex-End',
		margin: '2rem 0',
		marginBottom: '0.5rem',
	},
	wrapper: {
		margin: theme.spacing(1),
		position: 'relative',
	},
	buttonProgress: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
}))
