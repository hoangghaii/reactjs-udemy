import React from "react";
import "./PlaceHolder.scss";

function PlaceHolder(props) {
	return (
		<main className="placeholder-header">
			<div className="placeholder-header--content placeholder-header--image">
				<div className="placeholder-header--content placeholder-header--left">
					<p className="type">Trending</p>
					<div className="placeholder-header--content box-shadow placeholder-header--title" />
					<div className="placeholder-header--content box-shadow placeholder-header--artist" />
					<div className="placeholder-header--content box-shadow placeholder-header--view" />

					<div className="placeholder-header--content box-shadow placeholder-header--btn" />
				</div>
				<div className="placeholder-header--content box-shadow placeholder-header--right">
					<div className="placeholder-header--content box-shadow placeholder-header--right__image" />
					<div className="placeholder-header--content box-shadow placeholder-header--right__title" />
				</div>
			</div>
		</main>
	);
}

PlaceHolder.propTypes = {};

export default PlaceHolder;
