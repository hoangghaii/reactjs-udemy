import React from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Aux from "./../../Auxiliary/Auxiliary";
import ToolBar from "./../Navigation/ToolBar/ToolBar";
import classes from "./Layout.css";

const layout = (props) => (
	<Aux>
		<ToolBar />
		<SideDrawer />
		<main className={classes.Content}>{props.children}</main>
	</Aux>
);

export default layout;
