import React from "react";
import "./Loading.scss";

function Loading(props) {
	return (
		<div className="loading-wrapper">
			<div className="container">
				<span />
				<span />
				<span />
				<span />
				<span />
			</div>
		</div>
	);
}

Loading.propTypes = {};

export default Loading;
