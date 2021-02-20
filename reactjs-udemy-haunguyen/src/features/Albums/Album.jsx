import React from "react";
import AlbumList from "./components/AlbumList/AlbumList";

function Album(props) {
	const albumList = [
		{
			id: 1,
			name: "Những Bài Hát Hay Nhất Của Binz",
			thumbnailUrl:
				"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/a/3/f/5a3fc3e7494404c21d2a535cd7f6709b.jpg",
		},
		{
			id: 2,
			name: "Remix 50: Zing Choice",
			thumbnailUrl:
				"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/4/3/d/a43deb8e3ec405322fdad79ed5846748.jpg",
		},
		{
			id: 3,
			name: "Cặp Bài Trùng",
			thumbnailUrl:
				"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/d/5/e/5d5eb403398d5cd63651a1ba533d658e.jpg",
		},
		{
			id: 4,
			name: "Rap Kết Hợp Cực Chất",
			thumbnailUrl:
				"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/6/b/a/c6bac8abd0c466589152ce30dd104b23.jpg",
		},
		{
			id: 5,
			name: "Những Bài Hát Hay Nhất Của Touliver",
			thumbnailUrl:
				"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/7/8/9/2789e695ef717a46a0e9611ef9b9f945.jpg",
		},
		{
			id: 6,
			name: "Những Bài Hát Hay Nhất Của Sơn Tùng",
			thumbnailUrl:
				"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/6/0/4/0604b2039e6be2b7c8d4f3243b24594d.jpg",
		},
		{
			id: 7,
			name: "Hits of Binz",
			thumbnailUrl:
				"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/e/b/a/ceba9928f99ecb4aa568e844879d5cac.jpg",
		},
		{
			id: 8,
			name: "HIT-MARKET: Touliver",
			thumbnailUrl:
				"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/a/c/8/4ac8468704562038024f43b31b5513f4.jpg",
		},
	];
	return <AlbumList albumList={albumList} />;
}

Album.propTypes = {};

export default Album;
