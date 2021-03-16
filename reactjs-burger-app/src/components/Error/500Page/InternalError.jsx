import React from "react";
import classes from "./InternalError.css";

function InternalError(props) {
	return (
		<div className={classes.InternalError}>
			<div className={classes.Box}>
				<h1>500</h1>
				<p>Sorry, it's me, not you.</p>
				<p>:(</p>
				<p>
					<a href="/0">Let me try again!</a>
				</p>
			</div>
		</div>
	);
}

InternalError.propTypes = {};

export default InternalError;
