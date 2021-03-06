import React from "react";

function ProductCardLoading(props) {
	return (
		<div className="border border-light-blue-300 shadow my-20 rounded-lg p-5 w-full animate-pulse">
			<div className="rounded-lg bg-light-blue-300 h-96 w-full px-5 py-4 mb-4" />

			<div className="px-6 py-4">
				<div className="bg-light-blue-300 rounded-full w-52 mb-3 h-6" />
				<div className="bg-light-blue-300 rounded-full w-2/3 mt-3 h-5" />
			</div>

			<div className="px-6 py-4">
				<div className="bg-light-blue-300 rounded-full w-56 mb-3 h-6" />
				<div className="bg-light-blue-300 rounded-full w-96 mt-3 h-5" />
			</div>

			<div className="px-6 pt-4">
				<span className="inline-block bg-light-blue-300 rounded-full mt-2 w-32 h-5 mr-2 mb-2" />
				<span className="inline-block bg-light-blue-300 rounded-full mt-2 w-32 h-5 mr-2 mb-2" />
				<span className="inline-block bg-light-blue-300 rounded-full mt-2 w-32 h-5 mr-2 mb-2" />
			</div>
		</div>
	);
}

ProductCardLoading.propTypes = {};

export default ProductCardLoading;
