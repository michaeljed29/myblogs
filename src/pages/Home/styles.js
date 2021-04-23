import { makeStyles } from '@material-ui/core/styles'
import { white } from '../../styles/colors'

export default makeStyles((theme) => ({
	fab: {
		color: white,
		position: 'fixed',
		bottom: '5%',
		right: '3%',
	},
	loaderContainer: {
		textAlign: 'center',
	},
}))
