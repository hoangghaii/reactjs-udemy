import React from "react";
import "./Loading.scss";

function Loading(props) {
	return (
		<main className="placehoder-player">
			<p className="placehoder-player--heading">Choose a song</p>
			<div className="placehoder-player--wrapper">
				<div className="placehoder-player--wrapper__content">
					<div className="placehoder-player--content placehoder-player--image" />
					<div className="placehoder-player--content placehoder-player--title" />
					<div className="placehoder-player--content placehoder-player--subtitle" />
					<div className="placehoder-player--group">
						<div className="placehoder-player--content placehoder-player--button" />
						<div className="placehoder-player--content placehoder-player--button" />
						<div className="placehoder-player--content placehoder-player--button" />
					</div>
				</div>
			</div>
		</main>
	);
}

Loading.propTypes = {};

export default Loading;
