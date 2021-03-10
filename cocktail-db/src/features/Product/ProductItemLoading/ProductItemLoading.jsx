import React from "react";

function ProductItemLoading(props) {
	return (
		<div className="flex flex-col mt-12 rounded-lg p-0 w-full h-80 animate-pulse">
			<div className="shadow-lg relative h-60 custom-rounded">
				<div className="rounded-lg bg-light-blue-300 h-full w-full" />
			</div>

			<div className="bg-light-blue-300 rounded mt-4 w-full h-5 cursor-pointer shadow" />
		</div>
	);
}

ProductItemLoading.propTypes = {};

export default ProductItemLoading;
