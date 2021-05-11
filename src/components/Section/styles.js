import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	section: {
		padding: "2rem 0",
		[theme.breakpoints.up("sm")]: {
			padding: "5rem 0",
		},
	},
}));
