import React, { useEffect, useState } from "react";
import Player from "./Player";
import musicApi from "../../apis/musicApi";

function PlayerIndex(props) {
	const [dataRespond, setDataRespond] = useState({
		loading: true,
		data: null,
		status: undefined,
	});

	const [playList, setPlayList] = useState();

	useEffect(() => {
		const params = { format: "track" };
		(async () => {
			const dataRes = await musicApi.getPopularAllTime(params);
			setDataRespond({
				loading: false,
				data: dataRes.data,
				status: dataRes.status,
			});
		})();
	}, []);

	console.log(dataRespond.data);

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
		<div className="App">
			<Player
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				nextSongIndex={nextSongIndex}
				songs={songs}
			/>
		</div>
	);
}

PlayerIndex.propTypes = {};

export default PlayerIndex;
