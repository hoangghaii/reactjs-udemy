import React from "react";
import "./PlaceHolder.scss";

function PlaceHolder(props) {
	return (
		<main className="placeholder-song">
			<div className="placeholder-song--content placeholder-song--image" />

			<div className="placeholder-song--group">
				<div className="placeholder-song--content placeholder-song--title" />
				<div className="placeholder-song--content placeholder-song--subtitle" />
			</div>

			<div className="placeholder-song--content placeholder-song--button" />
		</main>
	);
}

PlaceHolder.propTypes = {};

export default PlaceHolder;
