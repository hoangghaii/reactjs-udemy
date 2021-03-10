import React from "react";
import PropTypes from "prop-types";

function Player(props) {
	return (
		<div className="right-side">
			<p className="adp-card-title">Now Playing</p>
			<div className="audio-player">
				<img
					src={process.env.PUBLIC_URL + "/assets/images/audio1.jpg"}
					alt=""
					className="adp-img"
					id="image"
				/>
				<div className="adp-title">
					<p id="title">Love Like This</p>
					<p>In a Perfect World</p>
					<p>Kodaline</p>
				</div>
			</div>
			<div className="adp-action">
				<a href="#0" id="previous" onClick="previousSong()">
					<i className="fas fa-backward" />
				</a>
				<a href="#0" id="play" onClick="justPlay()">
					<i className="fas fa-play" />
				</a>
				<a href="#0" id="next" onClick="nextSong()">
					<i className="fas fa-forward" />
				</a>
			</div>
		</div>
	);
}

Player.propTypes = {};

export default Player;
