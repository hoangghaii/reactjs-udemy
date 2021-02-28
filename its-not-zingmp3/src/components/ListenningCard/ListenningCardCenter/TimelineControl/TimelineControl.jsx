import { Grid, Slider, Typography, withStyles } from "@material-ui/core/";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const PrettoSlider = withStyles({
	root: {
		height: 6,
	},
	thumb: {
		height: 16,
		width: 16,
		marginTop: -5.3,
		marginLeft: -8,
		"&::before": {
			content: "''",
			height: "inherit",
			width: "inherit",
			position: "absolute",
			transform: "scale(1.6)",
			borderRadius: "50px",
			border: "1px solid",
		},
	},
	track: {
		height: 6,
		borderRadius: 4,
	},
	rail: {
		height: 6,
		borderRadius: 4,
	},
})(Slider);

const formatTime = (secs) => {
	let minutes = Math.floor(secs / 60);
	let seconds = Math.ceil(secs - minutes * 60);

	if (seconds < 10) seconds = `0${seconds}`;

	return `${minutes}:${seconds}`;
};

function TimelineControl(props) {
	const { audio, audioState } = props;
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		if (audio) {
			setCurrentTime(audio.currentTime);
		}
		// we will update the time of player every 800ms
		let setTimeInterval;
		if (audioState === "playing") {
			setTimeInterval = setInterval(() => {
				setCurrentTime(audio.currentTime);
			}, 800);
		} else {
			clearInterval(setTimeInterval);
		}

		return () => {
			clearInterval(setTimeInterval);
		};
	}, [audio, audioState]);

	const handleChangeTime = (e, newValue) => {
		audio.currentTime = newValue;
		setCurrentTime(newValue);
	};

	const showDuration = () => {
		if (audio) {
			if (audio.duration) {
				return formatTime(audio.duration);
			} else {
				return "0:00";
			}
		} else {
			return 0;
		}
	};

	return (
		<div style={{ margin: "0 auto", width: "90%" }}>
			<Grid container direction="row" justify="space-between">
				<Typography variant="body1" color="primary">
					{formatTime(currentTime)}
				</Typography>
				<Typography variant="body1" color="primary">
					{showDuration()}
				</Typography>
			</Grid>

			<PrettoSlider
				value={currentTime}
				onChange={handleChangeTime}
				max={audio ? audio.duration : 0}
			/>
		</div>
	);
}

TimelineControl.propTypes = {
	audio: PropTypes.any,
	audioState: PropTypes.string,
};

TimelineControl.defaultProps = {
	audio: null,
	audioState: "",
};

export default TimelineControl;
