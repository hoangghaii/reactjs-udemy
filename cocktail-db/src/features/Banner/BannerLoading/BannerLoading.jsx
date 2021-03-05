import React from "react";

function BannerLoading(props) {
	return (
		<div className="grid grid-cols-3 border border-light-blue-300 shadow mt-12 rounded-lg p-4 w-full h-64 animate-pulse">
			<div className="rounded-lg bg-light-blue-400 h-full w-72 px-5 py-4" />

			<div className="row-auto flex flex-col justify-center ml-2">
				<div className="h-4 bg-light-blue-400 rounded w-5/6 mb-2" />
				<div className="h-4 bg-light-blue-400 rounded mt-2" />
			</div>
		</div>
	);
}

BannerLoading.propTypes = {};

export default BannerLoading;
