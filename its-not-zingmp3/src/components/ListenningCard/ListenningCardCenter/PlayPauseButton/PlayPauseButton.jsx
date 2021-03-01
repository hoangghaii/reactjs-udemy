import { CircularProgress, IconButton } from "@material-ui/core/";
import { PauseCircleFilled, PlayCircleFilled } from "@material-ui/icons/";
import PropTypes from "prop-types";
import React from "react";

function PlayPauseButton(props) {
	const { audio, audioState } = props;
	console.log(audio);
	const togglePlayPause = (e) => {
		if (audioState === "playing") {
			audio.pause();
		} else if (audioState === "paused") {
			audio.play();
		}
		e.stopPropagation();
	};

	const showPlayPause = () => {
		if (audioState === "playing") {
			return (
				<PauseCircleFilled
					style={{ fontSize: "5rem", opacity: ".8" }}
				/>
			);
		} else if (audioState === "paused" || audioState === "loaded") {
			return (
				<PlayCircleFilled style={{ fontSize: "5rem", opacity: ".8" }} />
			);
		} else if (audioState === "loading") {
			return <CircularProgress />;
		}
	};

	return (
		<IconButton
			// size="small"
			color="primary"
			aria-label="Pause"
			onClick={togglePlayPause}
			disableFocusRipple={true}
			disableRipple={true}
		>
			{showPlayPause()}
		</IconButton>
	);
}

PlayPauseButton.propTypes = {
	audio: PropTypes.any,
	audioState: PropTypes.string,
};

PlayPauseButton.defaultProps = {
	audio: null,
	audioState: "",
};

export default PlayPauseButton;
