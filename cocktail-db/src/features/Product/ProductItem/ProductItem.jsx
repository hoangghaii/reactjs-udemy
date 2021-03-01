import React from "react";
import PropTypes from "prop-types";

function ProductItem(props) {
	return (
		<div className="flex flex-col" v-for="food in foodItems">
			<div className="shadow-lg relative h-40 custom-rounded">
				<div className="absolute bottom-0 left-0 w-1/3 bg-gray-200 rounded-tr-lg p-2 text-center text-xs">
					<span className="font-bold">
						{"{"}
						{"{"}food.prepTimeValue{"}"}
						{"}"}
					</span>{" "}
					{"{"}
					{"{"}food.prepTimeUnit{"}"}
					{"}"}
				</div>
			</div>
			<p className="mt-4 font-medium">
				{"{"}
				{"{"}food.title{"}"}
				{"}"}
			</p>
			<div className="mt-2 flex items-center">
				<span className="text-xs">
					<i className="fa fa-star" /> {"{"}
					{"{"}food.rating{"}"}
					{"}"}
				</span>
				<span className="text-gray-600 font-hairline text-xs mx-4">
					{"{"}
					{"{"}food.cat1{"}"}
					{"}"}
				</span>
				<span className="text-gray-600 font-hairline text-xs mx-4">
					{"{"}
					{"{"}food.cat2{"}"}
					{"}"}
				</span>
				<span className="text-gray-600 font-hairline text-xs mx-4">
					{"{"}
					{"{"}food.range{"}"}
					{"}"}
				</span>
			</div>
		</div>
	);
}

ProductItem.propTypes = {};

export default ProductItem;
