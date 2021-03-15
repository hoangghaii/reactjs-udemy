import React from "react";
import PropTypes from "prop-types";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";

function SideDrawer(props) {
	return (
		<div className={classes.SideDrawer}>
			<div className={classes.Logo}>
				<Logo />
			</div>
			<nav>
				<NavigationItems />
			</nav>
		</div>
	);
}

SideDrawer.propTypes = {};

export default SideDrawer;
