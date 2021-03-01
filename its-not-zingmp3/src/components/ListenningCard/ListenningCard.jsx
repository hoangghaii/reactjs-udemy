import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ListenningCardLeft from "./ListenningCardLeft/ListenningCardLeft";
import ListenningCardCenter from "./ListenningCardCenter/ListenningCardCenter";
import ListenningCardRight from "./ListenningCardRight/ListenningCardRight";
import VolumeController from "./ListenningCardRight/VolumeController";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

function ListenningCard(props) {
	const classes = useStyles();

	const songs = [
		{
			title: "Forget me too ft. Halsey",
			artist: "Machine Gun Kelly",
			img_src: "song-1.jpg",
			src: "on-n-on.mp3",
			desc: "Song: On-n-on - Artist: Machine Gun Kelly",
		},
		{
			title: "Song 2",
			artist: "Artist 2",
			img_src: "song-2.jpg",
			src: "somebody-new.mp3",
			desc: "Song: Somebody new - Artist: Machine Gun Kelly",
		},
		{
			title: "Song 3",
			artist: "Artist 3",
			img_src: "song-3.jpg",
			src: "on-n-on.mp3",
			desc: "Song:  On-n-on - Artist: Machine Gun Kelly",
		},
		{
			title: "Song 4",
			artist: "Artist 4",
			img_src: "song-4.jpg",
			src: "somebody-new.mp3",
			desc: "Song: Somebody new - Artist: Machine Gun Kelly",
		},
	];

	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

	const audioPlayer = useRef(null);
	const audio = audioPlayer.current;
	console.log("audio ListenningCard: ", audio);

	const getSongAudio = (songSrc) => {
		return process.env.PUBLIC_URL + "assets/music/" + songSrc;
	};

	useEffect(() => {
		setNextSongIndex(() => {
			if (currentSongIndex + 1 > songs.length - 1) {
				return 0;
			} else {
				return currentSongIndex + 1;
			}
		});
	}, [currentSongIndex, songs.length]);

	return (
		<>
			<audio
				src={getSongAudio(songs[currentSongIndex].src)}
				ref={audioPlayer}
			/>

			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<ListenningCardLeft song={songs[currentSongIndex]} />
					</Grid>

					<Grid item xs={6}>
						<ListenningCardCenter
							songs={songs}
							currentSongIndex={currentSongIndex}
							setCurrentSongIndex={setCurrentSongIndex}
							audio={audio}
						/>
					</Grid>

					<Grid item xs={2}>
						{/* <VolumeController audio={audio} /> */}
					</Grid>
				</Grid>
			</div>
		</>
	);
}

ListenningCard.propTypes = {};

export default ListenningCard;
