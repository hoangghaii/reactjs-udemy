import React from "react";
import PropTypes from "prop-types";
import AlbumItem from "./../AlbumItem/AlbumItem";

function AlbumList(props) {
	const { albumList } = props;
	return (
		<main className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
			<div>
				<h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-200 mb-5">
					Made for you
				</h1>
				<section className="grid grid-cols-1 sm:grid-cols-4 gap-4">
					{albumList.map((album, index) => (
						<AlbumItem album={album} key={index} />
					))}
				</section>
			</div>
		</main>
	);
}

AlbumList.propTypes = {
	albumList: PropTypes.array.isRequired,
};

export default AlbumList;
