import React, { useState } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Aux from "./../../Auxiliary/Auxiliary";
import ToolBar from "./../Navigation/ToolBar/ToolBar";
import classes from "./Layout.css";

function Layout(props) {
	const [showSliderDrawer, setShowSliderDrawer] = useState(true);

	const sliderDrawerCloseHandle = () => {
		setShowSliderDrawer(false);
	};

	const sideDrawerToggleHandler = () => {
		setShowSliderDrawer(!showSliderDrawer);
	};

	return (
		<Aux>
			<ToolBar drawerToggleClicked={sideDrawerToggleHandler} />
			<SideDrawer
				open={showSliderDrawer}
				closed={sliderDrawerCloseHandle}
			/>
			<main className={classes.Content}>{props.children}</main>
		</Aux>
	);
}

export default Layout;
