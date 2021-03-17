import React from "react";
import PropTypes from "prop-types";

function Navigation(props) {
	const { listNavLink } = props;

	return (
		<nav className="nav">
			<ul className="nav__list">
				{listNavLink.map((navLink, index) => (
					<li className="nav__item" key={index}>
						<span className="nav__link">{navLink}</span>
					</li>
				))}
			</ul>
		</nav>
	);
}

Navigation.propTypes = {
	listNavLink: PropTypes.array,
};

export default Navigation;
