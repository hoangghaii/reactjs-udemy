import React from "react";
import "./PlaceHolder.scss";

function PlaceHolder(props) {
	return (
		<main className="placeholder-track">
			<div className="placeholder-track--content placeholder-track--image" />

			<div className="placeholder-track--content placeholder-track--title" />
		</main>
	);
}

PlaceHolder.propTypes = {};

export default PlaceHolder;
