import PropTypes from "prop-types";
import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import classes from "./SideDrawer.css";

function SideDrawer(props) {
	const { closed, open } = props;
	let attachedClasses = [classes.SideDrawer, classes.Close];

	if (open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}

	return (
		<Aux>
			<Backdrop show={open} clicked={closed} />
			<div className={attachedClasses.join(" ")}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
}

SideDrawer.propTypes = {
	closed: PropTypes.func,
};

export default SideDrawer;
