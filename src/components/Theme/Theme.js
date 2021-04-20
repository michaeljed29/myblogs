import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { primaryColor } from '../../styles/colors'
import {
	MontserratRegular,
	MontserratItalic,
	MontserratMedium,
	MontserratSemiBold,
	MontserratBold,
	FugazOneRegular,
} from '../../styles/fonts'

const Theme = ({ children }) => {
	const isDark = false

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: primaryColor,
			},
			type: isDark ? 'dark' : 'light',
		},
		typography: {
			fontFamily: 'Montserrat, sans-serif',
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					'*': {
						margin: 0,
						padding: 0,
					},
					'@font-face': [
						MontserratRegular,
						MontserratItalic,
						MontserratMedium,
						MontserratSemiBold,
						MontserratBold,
						FugazOneRegular,
					],
					section: {
						padding: '5rem 0',
					},
				},
			},
		},
	})

	theme.palette.type = 'light'
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
