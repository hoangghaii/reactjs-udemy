import React, { useState } from "react";
import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.css";
import SideDrawer from "./../../components/Navigation/SideDrawer/SideDrawer";
import ToolBar from "./../../components/Navigation/ToolBar/ToolBar";

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
