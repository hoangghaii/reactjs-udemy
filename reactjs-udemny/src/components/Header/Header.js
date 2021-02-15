import React from "react";
import Navigation from "../Navigation/Navigation";

function Header(props) {
	return (
		<header className="border-b font-bold p-3 flex justify-between items-center">
			<span className="font-bold">AppName</span>
			<Navigation />
		</header>
	);
}

export default Header;
