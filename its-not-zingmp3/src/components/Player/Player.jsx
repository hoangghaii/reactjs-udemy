import PropTypes from "prop-types";
import React, { useState } from "react";
import Controls from "./Controls";
import Details from "./Details";

function Player(props) {
	const {
		currentSongIndex,
		setCurrentSongIndex,
		nextSongIndex,
		songs,
	} = props;

	const [isPlaying, setIsPlaying] = useState(false);

	const SkipSong = (forwards = true) => {
		if (forwards) {
			setCurrentSongIndex(() => {
				let temp = currentSongIndex;
				temp++;

				if (temp > songs.length - 1) {
					temp = 0;
				}

				return temp;
			});
		} else {
			setCurrentSongIndex(() => {
				let temp = currentSongIndex;
				temp--;

				if (temp < 0) {
					temp = songs.length - 1;
				}

				return temp;
			});
		}
	};

	return (
		<div className="c-player">
			<h4>Playing now</h4>
			<Details song={songs[currentSongIndex]} />
			<Controls
				song={songs[currentSongIndex]}
				control={isPlaying}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				SkipSong={SkipSong}
			/>
			<p>
				Next up:{" "}
				<span>
					{songs[nextSongIndex].title} by{" "}
					{songs[nextSongIndex].artist}
				</span>
			</p>
		</div>
	);
}

Player.propTypes = {
	currentSongIndex: PropTypes.number.isRequired,
	setCurrentSongIndex: PropTypes.func.isRequired,
	nextSongIndex: PropTypes.number.isRequired,
	songs: PropTypes.array.isRequired,
};

export default Player;
