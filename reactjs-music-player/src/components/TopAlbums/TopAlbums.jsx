import React, { useEffect, useState } from "react";
import musicApi from "./../../apis/musicApi";
import TopAlbumsItem from "./TopAlbumsItem/TopAlbumsItem";

function TopAlbums(props) {
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

	let content = "";

	if (dataRespond.loading) {
		content = <p>Loading....</p>;
	} else if (dataRespond.data) {
		const datas = dataRespond.data;

		content = datas.map((data, index) => (
			<TopAlbumsItem key={index} dataAlbum={data} />
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
