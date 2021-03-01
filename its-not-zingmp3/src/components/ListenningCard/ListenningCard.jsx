import React, {
	Fragment,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ListenningCardLeft from "./ListenningCardLeft/ListenningCardLeft";
import ListenningCardCenter from "./ListenningCardCenter/ListenningCardCenter";
import ListenningCardRight from "./ListenningCardRight/ListenningCardRight";
import VolumeController from "./ListenningCardRight/VolumeController";
import musicApi from "./../../apis/musicApi";

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

	const [dataRespond, setDataRespond] = useState({
		loading: true,
		data: null,
		status: undefined,
	});

	const [song, setSong] = useState(null);

	const [isRepeatOn, setIsRepeatOn] = useState(false);
	const [audioState, setAudioState] = useState(null);

	const audioPlayer = useRef(null);
	console.log(audioPlayer);
	const audio = audioPlayer.current;

	const playAudio = () => {
		audioPlayer.current
			.play()
			.then((_) => {
				// Automatic playback started!
				// Show playing UI.
				// console.log("audio played auto");
				//  setupMediaSessions();
				// setAudioState("playing");
			})
			.catch((error) => {
				// Auto-play was prevented
				// Show paused UI.
				// console.log("playback prevented");
				setAudioState("paused");
			});
	};

	useEffect(() => {
		// const params = "cher";
		const getAudio = async (param) => {
			setAudioState("loading");

			const dataRes = await musicApi.searchTrack(param);
			// setDataRespond({
			// 	loading: false,
			// 	data: dataRes.data,
			// 	status: dataRes.status,
			// });
			console.log(dataRes.data.results.trackmatches.track[0]);
			setSong(dataRes.data.results.trackmatches.track[0]);
			audioPlayer.current.src =
				dataRes.data.results.trackmatches.track[0].url;
			playAudio();
		};
		getAudio("Believe");
	}, []);

	// console.log(dataRespond.data);

	return (
		<>
			{song && (
				<Fragment>
					<audio
						onLoadStart={() => {
							setAudioState("loading");
						}}
						id="audio-element"
						//   onLoadedData={updateSongDB}
						// crossOrigin="anonymous"
						onPlay={() => setAudioState("playing")}
						onPlaying={() => setAudioState("playing")}
						onPause={() => setAudioState("paused")}
						//   onEnded={songEnded}
						autoPlay
						ref={audioPlayer}
					/>

					<Grid
						container
						direction="row"
						className="main-player-inner"
						style={{
							height: "calc(100vh - 46px)",
							justifyContent: "space-evenly",
							alignItems: "center",
						}}
					>
						<Grid item xs={4}>
							<ListenningCardLeft song={song} />
						</Grid>

						<Grid item xs={6}>
							<ListenningCardCenter
								// songs={songs}
								// currentSongIndex={currentSongIndex}
								// setCurrentSongIndex={setCurrentSongIndex}
								audio={audio}
								audioState={audioState}
							/>
						</Grid>

						<Grid item xs={2}>
							{/* <VolumeController audio={audio} /> */}
						</Grid>
					</Grid>
				</Fragment>
			)}
		</>
	);
}

ListenningCard.propTypes = {};

export default ListenningCard;
