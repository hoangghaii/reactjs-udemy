import React, { Fragment, useRef, useState } from "react";
import { useSelector } from "react-redux";

function Player(props) {
	const player = useSelector((state) => state.player.current);
	const listSongs = useSelector((state) => state.player.listSongs);
	console.log(listSongs);

	const currentPlayer = player.payload || {
		title: "Keeps Me Alive",
		subtitle: "Moses Sumney",
		image:
			"https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/25/91/4c/25914c1a-f147-e093-8e0c-5ed380575c6f/dj.sdqskeyt.jpg/800x800bb.jpeg",
		image_alt: "Keeps Me Alive - Moses Sumney",
		url: "https://www.shazam.com/track/501844142/keeps-me-alive",
	};

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

	return (
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
						<i className="fas fa-backward" />
					</span>
					<span id="play" onClick={handlePlayPause}>
						{isPlay ? (
							<i className="far fa-pause-circle" />
						) : (
							<i className="far fa-play-circle" />
						)}
					</span>
					<span id="next">
						<i className="fas fa-forward" />
					</span>
				</div>
			</div>
		</Fragment>
	);
}

Player.propTypes = {};

export default Player;
