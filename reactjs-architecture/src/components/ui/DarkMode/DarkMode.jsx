import React, { useEffect, useState } from "react";
import "./DarkMode.scss";

function DarkMode(props) {
	const localTheme = localStorage.getItem("theme");
	let havedLocalDarkTheme = false;

	if (localTheme) {
		if (localTheme === "dark") {
			havedLocalDarkTheme = true;
		}
	}

	const [isDark, setIsDark] = useState(havedLocalDarkTheme);

	useEffect(() => {
		if (isDark) {
			document.documentElement.setAttribute("data-theme", "dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.removeAttribute("data-theme", "dark");
			localStorage.removeItem("theme", "dark");
		}
	}, [isDark]);

	let classNameBtn = "btn-toggle";
	let classNameGrp1 = "btn-toggle__group btn-toggle__group--1";
	let classNameGrp2 = "btn-toggle__group btn-toggle__group--2";

	if (isDark) {
		classNameBtn += " dark";
		classNameGrp1 += " hide";
		classNameGrp2 += " show";
	}

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

	return (
		<button onClick={toggleTheme} className={classNameBtn}>
			<div className={classNameGrp1}>
				<i className="fas fa-sun"></i>
			</div>

			<div className={classNameGrp2}>
				<i className="fas fa-moon-stars"></i>
			</div>
		</button>
	);
}

DarkMode.propTypes = {};

export default DarkMode;
