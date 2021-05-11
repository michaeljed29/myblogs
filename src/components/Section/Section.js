import React from "react";
import useStyles from "./styles";

const Section = ({ children, className = "", ...otherProps }) => {
	const classes = useStyles();
	return (
		<section className={`${classes.section} ${className}`} {...otherProps}>
			{children}
		</section>
	);
};

export default Section;
