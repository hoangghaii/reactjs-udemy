import PropTypes from "prop-types";
import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./ToolBar.css";

function ToolBar(props) {
	const { drawerToggleClicked } = props;

	return (
		<header className={classes.ToolBar}>
			<DrawerToggle clicked={drawerToggleClicked} />

			<div className={classes.Logo}>
				<Logo />
			</div>

			<nav className={classes.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	);
}

ToolBar.propTypes = {
	drawerToggleClicked: PropTypes.func,
};

ToolBar.defaultProps = {
	drawerToggleClicked: null,
};

export default ToolBar;
