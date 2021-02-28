import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import TimelineControl from "./TimelineControl/TimelineControl";
import PreviousButton from "./PreviousButton/PreviousButton";
import PlayPauseButton from "./PlayPauseButton/PlayPauseButton";
import NextButton from "./NextButton/NextButton";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

function ListenningCardCenter(props) {
	const { audio, songs, setCurrentSongIndex, currentSongIndex } = props;

	const classes = useStyles();

	const [audioState, setAudioState] = useState("pause");

	const handlePlayPause = () => {
		audioState === "playing"
			? setAudioState("pause")
			: setAudioState("playing");
	};

	const playNext = () => {
		setCurrentSongIndex(() => {
			let temp = currentSongIndex;
			temp++;
			if (temp > songs.length) {
				temp = 0;
			}
			return temp;
		});
	};

	const playPrevious = () => {
		setCurrentSongIndex(() => {
			let temp = currentSongIndex;
			temp--;
			if (temp < 0) {
				temp = songs.length - 1;
			}
			return temp;
		});
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid
					item
					xs={12}
					container
					direction="row"
					justify="space-evenly"
					alignItems="center"
				>
					<PreviousButton onPlayPrevious={playPrevious} />

					<PlayPauseButton
						audio={audio}
						audioState={audioState}
						onClick={handlePlayPause}
					/>

					<NextButton onPlayNext={playNext} />
				</Grid>
				<Grid item xs={12}>
					<TimelineControl />
				</Grid>
			</Grid>
		</div>
	);
}

ListenningCardCenter.propTypes = {
	songs: PropTypes.array,
	song: PropTypes.object,
	setCurrentSongIndex: PropTypes.func,
	currentSongIndex: PropTypes.number,
};

ListenningCardCenter.deafultProps = {
	songs: null,
	song: null,
	setCurrentSongIndex: null,
	currentSongIndex: null,
};

export default ListenningCardCenter;
