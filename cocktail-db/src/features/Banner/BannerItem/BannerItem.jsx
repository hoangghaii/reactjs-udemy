import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BannerItem(props) {
	const { data } = props;

	return (
		<div className="grid grid-cols-3 bg-orange-100 mt-12 rounded-lg">
			<div>
				<img
					src={data.strDrinkThumb}
					alt={data.strDrinkThumb}
					className="self-end"
				/>
			</div>
			<div className="row-auto flex flex-col justify-center ml-6">
				<h3 className="tracking-wide text-orange-600 font-semibold text-lg">
					{data.strDrink}
				</h3>
				<h5 className="text-xs text-gray-500 font-normal">
					{data.strInstructions}
				</h5>
			</div>
			<div className="flex justify-end items-end pb-4 pr-4 cursor-pointer">
				<span className="font-hairline text-orange-500">
					Learn More <FontAwesomeIcon icon={faArrowRight} />
				</span>
			</div>
		</div>
	);
}

BannerItem.propTypes = {
	data: PropTypes.object,
};

BannerItem.defaultProps = {
	data: null,
};

export default BannerItem;
