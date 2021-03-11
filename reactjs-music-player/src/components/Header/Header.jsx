import React, { Fragment, useEffect, useState } from "react";
import musicApi from "./../../apis/musicApi";
import PlaceHolder from "./PlaceHolder/PlaceHolder";

function Header(props) {
	const [trending, setTrending] = useState({
		loading: true,
		data: null,
		dataDetail: null,
	});

	useEffect(() => {
		(async () => {
			const dataRes = await musicApi.getTopTrack(1);
			const detailRes = await musicApi.getDetail(
				dataRes.data.tracks[0].key
			);

			setTrending({
				loading: false,
				data: dataRes.data.tracks[0],
				dataDetail: detailRes.data,
			});
		})();
	}, []);

	let content = "";
	if (trending.loading) {
		content = <PlaceHolder />;
	} else if (trending.data) {
		const data = trending.data;
		const dataDetail = trending.dataDetail;

		content = (
			<div className="top-content">
				<div
					className="trending"
					style={{
						backgroundImage: `url(${data.images.coverarthq})`,
					}}
				>
					<div className="left">
						<p className="type">Trending</p>
						<p className="title">{data.title}</p>
						<p className="artist">{dataDetail.genres.primary}</p>
						<p className="view">
							{dataDetail.sections[0].metadata[2].title}{" "}
							{dataDetail.sections[0].metadata[2].text}
						</p>
						<a href="#0" className="btn-play">
							Play Now
						</a>
					</div>
					<div className="right">
						<img
							src={data.images.background}
							alt={data.share.subject}
						/>
						{data.subtitle}
					</div>
				</div>
			</div>
		);
	}

	return <Fragment>{content}</Fragment>;
}

Header.propTypes = {};

export default Header;
