import React, { useEffect, useState } from "react";
import musicApi from "./../../apis/musicApi";
import TopSongsItem from "./TopSongsItem/TopSongsItem";

function TopSongs(props) {
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

	let content = "";

	if (dataRespond.loading) {
		content = <p>Loading....</p>;
	} else if (dataRespond.data) {
		const datas = dataRespond.data;

		content = datas.map((data, index) => (
			<TopSongsItem key={index} dataSong={data} />
		));
	}

	return (
		<div className="right">
			<p>Top Songs</p>
			<div className="songs">{content}</div>
		</div>
	);
}

TopSongs.propTypes = {};

export default TopSongs;
