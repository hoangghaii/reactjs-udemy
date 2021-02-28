import {
	faBackward,
	faForward,
	faPause,
	faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import VolumeController from "../ListenningCard/ListenningCardRight/VolumeController";

function Controls(props) {
	const { song, control, isPlaying, setIsPlaying, SkipSong } = props;

	const audioEl = useRef(null);

	useEffect(() => {
		if (control) {
			audioEl.current.play();
		} else {
			audioEl.current.pause();
		}
	});

	const getSongAudio = (songSrc) => {
		return process.env.PUBLIC_URL + "assets/music/" + songSrc;
	};

	return (
		<div className="c-player--controls">
			<audio src={getSongAudio(song.src)} ref={audioEl} />
			<button className="skip-btn" onClick={() => SkipSong(false)}>
				<FontAwesomeIcon icon={faBackward} />
			</button>
			<button
				className="play-btn"
				onClick={() => setIsPlaying(!isPlaying)}
			>
				<FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
			</button>
			<button className="skip-btn" onClick={() => SkipSong()}>
				<FontAwesomeIcon icon={faForward} />
			</button>
			{/* <VolumeController audio={audioEl} /> */}
		</div>
	);
}

Controls.propTypes = {
	isPlaying: PropTypes.bool,
	setIsPlaying: PropTypes.func,
	SkipSong: PropTypes.func,
};

export default Controls;
