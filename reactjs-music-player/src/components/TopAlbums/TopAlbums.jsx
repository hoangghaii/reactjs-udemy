import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../Player/playerSlice";
import musicApi from "./../../apis/musicApi";
import TopAlbumsItem from "./TopAlbumsItem/TopAlbumsItem";

function TopAlbums(props) {
	const dispatch = useDispatch();

	const [dataRespond, setDataRespond] = useState({
		loading: true,
		data: null,
	});

	useEffect(() => {
		(async () => {
			const dataRes = await musicApi.getTopTrack();

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
		content = <p>Loading....</p>;
	} else if (dataRespond.data) {
		const datas = dataRespond.data;

		content = datas.map((data, index) => (
			<TopAlbumsItem
				key={index}
				dataAlbum={data}
				handleSetPlayer={() => handleSetPlayer(data)}
			/>
		));
	}

	return (
		<div className="left-side-top">
			<div className="top-albums-title">
				<span>Top Tracks</span>
				<span>See all</span>
			</div>
			<div className="top-albums">{content}</div>
		</div>
	);
}

TopAlbums.propTypes = {};

export default TopAlbums;
