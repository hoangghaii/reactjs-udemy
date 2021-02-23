import PropTypes from "prop-types";
import React from "react";
import "./Geolocation.scss";

function Geolocation(props) {
	const { location, currentDate } = props;

	return (
		<div className="geolocation">
			<h1> {location.city} </h1>
			<h1>
				{location.state}, {location.country}
			</h1>
			<h3> {currentDate} </h3>
		</div>
	);
}

Geolocation.propTypes = {
	location: PropTypes.object.isRequired,
	currentDate: PropTypes.string.isRequired,
};

export default Geolocation;
