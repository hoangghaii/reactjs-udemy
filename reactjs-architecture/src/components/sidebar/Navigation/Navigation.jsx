import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
	const { listNavLink, handleCloseMenu } = props;

	const closeMenu = () => {
		if (!handleCloseMenu) return;
		handleCloseMenu();
	};

	return (
		<nav className="nav">
			<ul className="nav__list">
				{/* <li onClick={closeMenu} style={{ paddingBottom: "1rem" }}>
					<NavLink
						exact
						to="/"
						activeClassName="nav__item--active"
						className="nav__item"
					>
						<span className="nav__link">About</span>
					</NavLink>
				</li> */}

				{listNavLink.map((navLink, index) => {
					const link = "/" + navLink.toLowerCase();

					return (
						<li
							key={index}
							onClick={closeMenu}
							style={{ paddingBottom: "1rem" }}
						>
							<NavLink
								exact
								to={link}
								activeClassName="nav__item--active"
								className="nav__item"
							>
								<span className="nav__link">{navLink}</span>
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

Navigation.propTypes = {
	listNavLink: PropTypes.array,
	handleCloseMenu: PropTypes.func,
};

export default Navigation;
