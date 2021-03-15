import React from "react";
import Logo from "../../UI/Logo/Logo";
import classes from "./ToolBar.css";

function ToolBar(props) {
	return (
		<header className={classes.ToolBar}>
			<div>MENU</div>
			<Logo />
			<nav></nav>
		</header>
	);
}

ToolBar.propTypes = {};

export default ToolBar;
