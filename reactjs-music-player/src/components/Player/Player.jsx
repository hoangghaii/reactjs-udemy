import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./PlayerLoadingPlaceHolder/Loading";
import { setCurrentSong } from "./playerSlice";

function Player(props) {
	const dispatch = useDispatch();
	const player = useSelector((state) => state.player.current);

	const listSongs = useSelector((state) => state.player.listSongs);

	const [hasPlayer, setHasPlayer] = useState();

	useEffect(() => {
		setHasPlayer(player.payload);
	}, [player.payload]);

	const audioRef = useRef();
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isPlay, setPlay] = useState(false);

	const handleLoadedData = () => {
		setDuration(audioRef.current.duration);
		console.log(duration);
		if (isPlay) audioRef.current.play();
	};

	const playAudio = () => {
		var playPromise = audioRef.current.play();

		if (playPromise !== undefined) {
			playPromise
				.then((_) => {
					audioRef.current.pause();
				})
				.catch((error) => {
					console.log(error);
					setPlay(!isPlay);
				});
		}
	};

	const handlePlayPause = () => {
		playAudio();

		// isPlay ? audioRef.current.pause() : audioRef.current.play();
		setPlay(!isPlay);
	};

	const findPlayerIndex = () => {
		return listSongs.findIndex((ele) => ele.id === player.payload["id"]);
	};

	const renderPrevButton = () => {
		const index = findPlayerIndex();

		if (listSongs && listSongs.length > 1 && index <= 0) {
			return <span id="previous" />;
		} else if (listSongs && listSongs.length > 1) {
			return (
				<span id="previous" onClick={handlePrevios}>
					<i className="fas fa-backward" />
				</span>
			);
		}
	};

	const handlePrevios = () => {
		const index = findPlayerIndex();
		const action = setCurrentSong(listSongs[index - 1]);
		dispatch(action);
	};

	const renderNextButton = () => {
		const index = findPlayerIndex();

		if (
			listSongs &&
			listSongs.length > 1 &&
			index >= listSongs.length - 1
		) {
			return <span id="next" />;
		} else if (listSongs && listSongs.length > 1) {
			return (
				<span id="next" onClick={handleNext}>
					<i className="fas fa-forward" />
				</span>
			);
		}
	};

	const handleNext = () => {
		const index = findPlayerIndex();
		const action = setCurrentSong(listSongs[index + 1]);
		dispatch(action);
	};

	let content = <Loading />;

	if (hasPlayer && hasPlayer !== undefined) {
		const currentPlayer = hasPlayer;

		content = (
			<Fragment>
				<audio
					ref={audioRef}
					src={currentPlayer.url}
					onLoadedData={handleLoadedData}
					onTimeUpdate={() => {
						setCurrentTime(audioRef.current.currentTime);
					}}
					onEnded={() => setPlay(false)}
				/>

				<div className="right-side">
					<p className="adp-card-title">Now Playing</p>

					<div className="audio-player">
						<img
							src={currentPlayer.image}
							alt={currentPlayer.image_alt}
							className="adp-img"
							id="image"
						/>
						<div className="adp-title">
							<p id="title">{currentPlayer.title}</p>
							<p>{currentPlayer.subtitle}</p>
						</div>
					</div>

					<div className="adp-action">
						{renderPrevButton()}

						<span id="play" onClick={handlePlayPause}>
							{isPlay ? (
								<i className="far fa-pause-circle" />
							) : (
								<i className="far fa-play-circle" />
							)}
						</span>

						{renderNextButton()}
					</div>
				</div>
			</Fragment>
		);
	}

	return <Fragment>{content}</Fragment>;
}

Player.propTypes = {};

export default Player;
