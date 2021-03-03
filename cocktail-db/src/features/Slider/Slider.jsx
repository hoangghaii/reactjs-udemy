import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import SliderList from "./SliderList/SliderList";

function Slider(props) {
	// const { dataSlider } = props;

	return (
		<>
			<div className="flex mt-12 items-end">
				<h3 className="text-xl font-bold">Restaurants</h3>
				<img
					src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/hamburger_1f354.png"
					className="mx-4 h-8 w-8"
					alt=""
				/>
				<button className="ml-auto rounded-full p-2 bg-orange-600 hover:bg-orange-500 hover:shadow-lg text-white cursor-pointer text-sm">
					<FontAwesomeIcon icon={faClock} className="mx-2" />
					<span className="font-hairline">Delivery: </span>
					<span>Now</span>
					<FontAwesomeIcon
						icon={faChevronCircleDown}
						className="mx-2"
					/>
				</button>
			</div>
			<SliderList />
		</>
	);
}

Slider.propTypes = {};

export default Slider;
