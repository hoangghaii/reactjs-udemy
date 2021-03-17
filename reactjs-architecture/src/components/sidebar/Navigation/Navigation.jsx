import React from "react";
import PropTypes from "prop-types";

function Navigation(props) {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<li className="nav__item">
					<span className="nav__link">About</span>
				</li>
				<li className="nav__item">
					<span className="nav__link">Projects</span>
				</li>
				<li className="nav__item">
					<span className="nav__link">Collaborative</span>
				</li>
				<li className="nav__item">
					<span className="nav__link">Gallery</span>
				</li>
				<li className="nav__item">
					<span className="nav__link">Featured</span>
				</li>
			</ul>
		</nav>
	);
}

Navigation.propTypes = {};

export default Navigation;
