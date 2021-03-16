import React from "react";
import PropTypes from "prop-types";
import classes from "./NotFound.css";

function NotFound(props) {
	return (
		<div className={classes.NotFound}>
			<div className={classes.Err}>4</div>
			<i
				className={[
					classes.Icon + " " + "far fa-question-circle fa-spin",
				]}
			/>
			<div className={classes.Err2}>4</div>
			<div className={classes.Msg}>
				Maybe this page moved? Got deleted? Is hiding out in quarantine?
				Never existed in the first place?
				<p>
					Let's go <a href="#0">home</a> and try from there.
				</p>
			</div>
		</div>
	);
}

NotFound.propTypes = {};

export default NotFound;
