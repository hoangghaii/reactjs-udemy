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
	const { audio, audioState } = props;
	// console.log(audio.currentSrc);
	const classes = useStyles();

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
					{/* <PreviousButton onPlayPrevious={playPrevious} /> */}

					<PlayPauseButton audio={audio} audioState={audioState} />

					{/* <NextButton onPlayNext={playNext} /> */}
				</Grid>
				<Grid item xs={12}>
					<TimelineControl audio={audio} audioState={audioState} />
				</Grid>
			</Grid>
		</div>
	);
}

ListenningCardCenter.propTypes = {
	audio: PropTypes.any,
	audioState: PropTypes.string,
	// songs: PropTypes.array,
	// song: PropTypes.object,
	// setCurrentSongIndex: PropTypes.func,
	// currentSongIndex: PropTypes.number,
};

ListenningCardCenter.deafultProps = {
	audio: null,
	audioState: "",
	// songs: null,
	// song: null,
	// setCurrentSongIndex: null,
	// currentSongIndex: null,
};

export default ListenningCardCenter;
