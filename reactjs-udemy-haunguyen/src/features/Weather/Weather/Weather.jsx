import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Weather.scss";
import SearchBox from "./../SearchBox/SearchBox";
import Geolocation from "./../Geolocation/Geolocation";
import WeatherDisplay from "./../WeatherDisplay/WeatherDisplay";
import { getWeather } from "./../../../apis/weatherApi";

function Weather(props) {
	const [inputlocation, setInputLocation] = useState("Embu");
	const [currentDate, setCurrentDate] = useState("");
	const [location, setLocation] = useState({
		city: "",
		state: "",
		country: "",
	});
	const [weather, setWeather] = useState({
		currentTemp: 0,
		weatherMain: "",
		tempMax: 0,
		tempMin: 0,
	});

	const fetchData = async (newLocation) => {
		const now = new Date();
		setCurrentDate(dateBuilder(now));
		const response = await getWeather(newLocation);
		return response;
	};

	useEffect(() => {
		fetchData("São Paulo").then(([newWeather, placeName]) => {
			setWeather(newWeather);
			setLocation(placeName);
		});
	}, []);

	const dateBuilder = (d) => {
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		const days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];

		const day = days[d.getDay()];
		const date = d.getDate();
		const month = months[d.getMonth()];
		const year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	};

	const getImgSource = (img) => {
		return process.env.PUBLIC_URL + `assets/img/${img}.jpg`;
	};

	const setBackground = () => {
		const now = new Date();
		const hour = now.getDate();

		if (hour <= 7 || hour > 18) return getImgSource("blue");
		if (hour > 7 && hour <= 15) return getImgSource("green");
		return getImgSource("blue");
	};

	const handleInputLocation = () => {};

	const getForceCast = () => {};

	return (
		<div
			className="weather"
			style={{ backgroundImage: `url(${setBackground()})` }}
		>
			<div className="wrapper">
				<SearchBox
					handleSubmit={handleInputLocation}
					handleInput={getForceCast}
				/>
				<Geolocation location={location} currentDate={currentDate} />
				<WeatherDisplay weather={weather} />
			</div>
		</div>
	);
}

Weather.propTypes = {};

export default Weather;
