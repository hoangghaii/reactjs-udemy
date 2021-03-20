import PropTypes from "prop-types";
import React from "react";
import Logo from "../ui/Logo/Logo";
import "./Loading.scss";

function Loading(props) {
	const { isShow } = props;

	return isShow ? (
		<div className="loading-component">
			<Logo />
		</div>
	) : null;
}

Loading.propTypes = {
	isShow: PropTypes.bool,
};

Loading.defaultProps = {
	isShow: false,
};

export default Loading;
