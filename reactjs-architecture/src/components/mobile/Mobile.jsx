import PropTypes from "prop-types";
import React from "react";

function Mobile(props) {
	const { isAddClass, addClass } = props;

	let className = "btn-mobile";

	const handleAddClass = () => {
		if (!addClass) return;
		addClass();
	};

	if (isAddClass === true) {
		className += " show";
	}

	return (
		<div className={className} onClick={handleAddClass}>
			<div className="btn-logo" title="Green Architecture">
				<img
					src={process.env.PUBLIC_URL + "/images/logo-mobile.png"}
					alt="Logo"
					className="logo"
				/>
			</div>

			<div className="btn-close"></div>
		</div>
	);
}

Mobile.propTypes = {
	isAddClass: PropTypes.bool,
	addClass: PropTypes.func,
};

export default Mobile;
