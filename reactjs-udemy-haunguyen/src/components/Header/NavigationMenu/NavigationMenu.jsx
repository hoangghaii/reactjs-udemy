import React from "react";
// import PropTypes from "prop-types";
import NavigationMenuItem from "./NavigationMenuItem/NavigationMenuItem";

function NavigationMenu(props) {
	const menuList = ["album", "product", "todo", "weather", "counter"];

	return (
		<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
			<div className="flex-shrink-0 flex items-center">
				<img
					className="block lg:hidden h-8 w-auto"
					src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
					alt="Workflow"
				/>
				<img
					className="hidden lg:block h-8 w-auto"
					src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
					alt="Workflow"
				/>
			</div>
			<div className="hidden sm:block sm:ml-6">
				<div className="flex space-x-4">
					{menuList.map((menu, index) => (
						<NavigationMenuItem key={index} menu={menu} />
					))}
				</div>
			</div>
		</div>
	);
}

NavigationMenu.propTypes = {};

export default NavigationMenu;
