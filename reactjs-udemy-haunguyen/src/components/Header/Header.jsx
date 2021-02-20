import React, { useState } from "react";
import "./Header.scss";
import MobileMenuButton from "./MobileMenuButton/MobileMenuButton";
import MobileNavigationMenu from "./MobileNavigationMenu/MobileNavigationMenu";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import NotificationUser from "./NotificationUser/NotificationUser";

function Header(props) {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const handleOpenMobileMenu = () => {
		setOpenMobileMenu(openMobileMenu ? false : true);
	};

	return (
		<nav className="bg-gray-800">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<MobileMenuButton
						handleOpenMobileMenu={handleOpenMobileMenu}
					/>

					<NavigationMenu />

					<NotificationUser />
				</div>
			</div>

			<MobileNavigationMenu isOpen={openMobileMenu} />
		</nav>
	);
}

Header.propTypes = {};

export default Header;
