import { makeStyles } from '@material-ui/core/styles'
import { white } from '../../styles/colors'

export default makeStyles((theme) => ({
	fab: {
		color: white,
		position: 'fixed',
		bottom: theme.spacing(6.25),
		right: theme.spacing(6.25),
	},
}))
