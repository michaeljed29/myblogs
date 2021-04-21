import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
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
})
