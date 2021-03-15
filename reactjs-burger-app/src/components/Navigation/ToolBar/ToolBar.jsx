import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./ToolBar.css";

function ToolBar(props) {
	return (
		<header className={classes.ToolBar}>
			<div>MENU</div>
			<div className={classes.Logo}>
				<Logo />
			</div>
			<nav className={classes.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	);
}

ToolBar.propTypes = {};

export default ToolBar;
