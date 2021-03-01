import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function SliderList(props) {
	return (
		<div className="grid grid-cols-9 gap-6 mt-12">
			<button className="h-10 rounded-lg self-center hover:shadow-xl flex justify-center items-center bg-gray-100 p-3 ml-auto">
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		</div>
	);
}

SliderList.propTypes = {};

export default SliderList;
