import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { primaryColor } from "../../styles/colors";
import { useMediaQuery } from "@material-ui/core";
import { white } from "../../styles/colors";
import {
	MontserratRegular,
	MontserratItalic,
	MontserratMedium,
	MontserratSemiBold,
	MontserratBold,
	FugazOneRegular,
} from "../../styles/fonts";
import { useTheme } from "@material-ui/core/styles";

const Theme = ({ children }) => {
	const { isLight } = useSelector((state) => state.theme);
	const defaultTheme = useTheme();
	const matches = useMediaQuery(defaultTheme.breakpoints.up("sm"));

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: primaryColor,
				contrastText: white,
			},
			type: isLight ? "light" : "dark",
		},
		typography: {
			fontFamily: "Montserrat, sans-serif",
		},
		overrides: {
			MuiCssBaseline: {
				"@global": {
					"*": {
						margin: 0,
						padding: 0,
					},
					"@font-face": [
						MontserratRegular,
						MontserratItalic,
						MontserratMedium,
						MontserratSemiBold,
						MontserratBold,
						FugazOneRegular,
					],
				},
			},
		},
	});

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
