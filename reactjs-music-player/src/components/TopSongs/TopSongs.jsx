import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../Player/playerSlice";
import musicApi from "./../../apis/musicApi";
import PlaceHolder from "./PlaceHolder/PlaceHolder";
import TopSongsItem from "./TopSongsItem/TopSongsItem";

function TopSongs(props) {
	const dispatch = useDispatch();

	const [dataRespond, setDataRespond] = useState({
		loading: true,
		data: null,
	});

	useEffect(() => {
		(async () => {
			const dataRes = await musicApi.getTopSongs();

			setDataRespond({
				loading: false,
				data: dataRes.data.tracks,
			});
		})();
	}, []);

	const handleSetPlayer = (data) => {
		const dataDetail = {
			title: data.title,
			subtitle: data.subtitle,
			image: data.images.coverarthq,
			image_alt: data.share.subject,
			url: data.url,
		};

		const action = setCurrentSong(dataDetail);
		dispatch(action);
	};

	let content = "";

	if (dataRespond.loading) {
		const dataMock = [1, 2, 3, 4];
		content = dataMock.map((index) => <PlaceHolder key={index} />);
	} else if (dataRespond.data) {
		const datas = dataRespond.data;

		content = datas.map((data, index) => (
			<TopSongsItem
				key={index}
				dataSong={data}
				handleSetPlayer={() => handleSetPlayer(data)}
			/>
		));
	}

	return (
		<div className="right">
			<p>Top Songs</p>
			<div className="songs">{content}</div>
			{/* <PlaceHolder /> */}
		</div>
	);
}

TopSongs.propTypes = {};

export default TopSongs;
