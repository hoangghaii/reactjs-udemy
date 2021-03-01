import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Banner(props) {
	return (
		<div className="grid grid-cols-3 bg-orange-100 mt-12 rounded-lg">
			<div>
				<img
					src="https://image.freepik.com/free-vector/vector-cartoon-illustration-traditional-set-fast-food-meal_1441-331.jpg"
					alt="fooood"
					className="self-end"
				/>
			</div>
			<div className="row-auto flex flex-col justify-center items-center">
				<h3 className="tracking-wide text-orange-600 text-lg ml-6">
					$0 delivery for 30 days!&nbsp;&nbsp;&nbsp;🎉
				</h3>
				<h5 className="text-xs text-gray-500">
					$0 delivery fee for orders over $10 for 30 days
				</h5>
			</div>
			<div className="flex justify-end items-end pb-4 pr-4">
				<a className="font-hairline text-orange-500" href>
					Learn More <FontAwesomeIcon icon={faArrowRight} />
				</a>
			</div>
		</div>
	);
}

Banner.propTypes = {};

export default Banner;
