import React, { Fragment, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./PlayerLoadingPlaceHolder/Loading";

function Player(props) {
	const player = useSelector((state) => state.player.current);

	const listSongs = useSelector((state) => state.player.listSongs);
	console.log(listSongs);

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

	let content = <Loading />;

	if (hasPlayer && hasPlayer !== undefined) {
		const currentPlayer = hasPlayer;

		content = (
			<Fragment>
				<audio
					ref={audioRef}
					autoPlay
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
						<span id="previous">
							{listSongs && listSongs.length > 0 && (
								<i className="fas fa-backward" />
							)}
						</span>

						<span id="play" onClick={handlePlayPause}>
							{isPlay ? (
								<i className="far fa-pause-circle" />
							) : (
								<i className="far fa-play-circle" />
							)}
						</span>

						<span id="next">
							{listSongs && listSongs.length > 0 && (
								<i className="fas fa-forward" />
							)}
						</span>
					</div>
				</div>
			</Fragment>
		);
	}

	return <Fragment>{content}</Fragment>;
}

Player.propTypes = {};

export default Player;
