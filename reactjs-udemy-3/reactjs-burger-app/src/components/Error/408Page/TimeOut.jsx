import React from "react";
import classes from "./TimeOut.css";

function TimeOut(props) {
	return (
		<div className={classes.TimeOut}>
			<h1 aria-label="408 Error">
				4<span />8
			</h1>
			<h2>Server request timed out.</h2>
		</div>
	);
}

TimeOut.propTypes = {};

export default TimeOut;
