import PropTypes from "prop-types";
import React from "react";
import "./WeatherDisplay.scss";

function WeatherDisplay(props) {
	const {
		weather: { currentTemp, weatherMain, tempMax, tempMin },
	} = props;

	return (
		<div className="weather-display">
			<h1>
				{Math.round(currentTemp)}
				<span>&#186;C</span>
			</h1>
			<h2>{weatherMain}</h2>
			<h3>
				{Math.round(tempMin)}&#186;C / {Math.round(tempMax)}&#186;C
			</h3>
		</div>
	);
}

WeatherDisplay.propTypes = {
	location: PropTypes.object.isRequired,
	currentDate: PropTypes.string.isRequired,
};

export default WeatherDisplay;
