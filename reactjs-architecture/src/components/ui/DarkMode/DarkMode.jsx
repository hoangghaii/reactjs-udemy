import PropTypes from "prop-types";
import React from "react";
import "./DarkMode.scss";

function DarkMode(props) {
	const { theme, handleToggleTheme } = props;

	let isDark = theme === "dark" ? true : false;

	let classNameBtn = "btn-toggle";
	let classNameGrp1 = "btn-toggle__group btn-toggle__group--1";
	let classNameGrp2 = "btn-toggle__group btn-toggle__group--2";

	if (isDark) {
		classNameBtn += " dark";
		classNameGrp1 += " hide";
		classNameGrp2 += " show";
	}

	const toggleTheme = () => {
		if (!handleToggleTheme) return;
		handleToggleTheme();
	};

	return (
		<button onClick={toggleTheme} className={classNameBtn}>
			{!isDark && (
				<div className={classNameGrp1}>
					<i className="fas fa-sun"></i>
				</div>
			)}

			{isDark && (
				<div className={classNameGrp2}>
					<i className="fas fa-moon-stars"></i>
				</div>
			)}
		</button>
	);
}

DarkMode.propTypes = {
	handleToggleTheme: PropTypes.func,
	theme: PropTypes.string,
};

export default DarkMode;
