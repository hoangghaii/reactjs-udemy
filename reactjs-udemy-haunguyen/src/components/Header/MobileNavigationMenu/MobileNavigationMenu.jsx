import PropTypes from "prop-types";
import React from "react";
import MobileNavigationMenuItem from "./MobileNavigationMenuItem/MobileNavigationMenuItem";

function MobileNavigationMenu(props) {
	const menuList = ["album", "product", "todo"];

	const { isOpen } = props;
	let css = isOpen ? "hidden sm:hidden" : "sm:hidden";

	return (
		<div className={css}>
			<div className="px-2 pt-2 pb-3 space-y-1">
				{menuList.map((menu, index) => (
					<MobileNavigationMenuItem key={index} menu={menu} />
				))}
			</div>
		</div>
	);
}

MobileNavigationMenu.propTypes = {
	isOpen: PropTypes.bool,
};

MobileNavigationMenu.defaultProps = {
	isOpen: false,
};

export default MobileNavigationMenu;
