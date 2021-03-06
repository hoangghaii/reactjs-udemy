import React from "react";

function BannerLoading(props) {
	return (
		<div className="grid grid-cols-3 border border-light-blue-300 shadow mt-12 rounded-lg p-4 w-full h-80 animate-pulse">
			<div className="rounded-lg bg-light-blue-300 h-full w-full px-5 py-4" />

			<div className="row-auto flex flex-col justify-center ml-6">
				<div className="bg-light-blue-300 rounded-md w-5/6 mb-2 h-5" />
				<div className="bg-light-blue-300 rounded-md my-2 h-4" />
				<div className="bg-light-blue-300 rounded-md mt-2 h-4" />
			</div>

			<div className="flex justify-end items-end pb-4 pr-4 cursor-pointer">
				<div className="bg-light-blue-300 rounded-full mt-2 w-32 h-9" />
			</div>
		</div>
	);
}

BannerLoading.propTypes = {};

export default BannerLoading;
