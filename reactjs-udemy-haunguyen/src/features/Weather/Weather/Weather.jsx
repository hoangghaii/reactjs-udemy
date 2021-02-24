import React, { Fragment, useEffect, useState } from "react";
import { getWeather } from "./../../../apis/weatherApi";
import Geolocation from "./../Geolocation/Geolocation";
import SearchBox from "./../SearchBox/SearchBox";
import WeatherDisplay from "./../WeatherDisplay/WeatherDisplay";
import "./Weather.scss";

function Weather(props) {
	const [currentDate, setCurrentDate] = useState("");
	const [location, setLocation] = useState({
		city: "",
		state: "",
		country: "",
	});
	const [weather, setWeather] = useState({
		currentTemp: 0,
		humidity: 0,
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
		fetchData("São Paulo")
			.then(([newWeather, placeName]) => {
				setWeather(newWeather);
				setLocation(placeName);
			})
			.catch((error) => {
				console.log(error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

	const [errorRes, setErrorRes] = useState(false);

	const handleGetForceCast = (value) => {
		fetchData(value)
			.then(([newWeather, placeName]) => {
				setWeather(newWeather);
				setLocation(placeName);
				setErrorRes(false);
			})
			.catch((error) => {
				console.log(error);
				setErrorRes(true);
			});
	};

	return (
		<div
			className="weather"
			style={{ backgroundImage: `url(${setBackground()})` }}
		>
			<div className="wrapper">
				<SearchBox handleSubmit={handleGetForceCast} />
				{errorRes && (
					<div className="error-msg">
						<h2>Error when load API!</h2>
						<h3>Maybe you entered the city name incorrectly</h3>
					</div>
				)}

				{!errorRes && (
					<Fragment>
						<Geolocation
							location={location}
							currentDate={currentDate}
						/>
						<WeatherDisplay weather={weather} />
					</Fragment>
				)}
			</div>
		</div>
	);
}

Weather.propTypes = {};

export default Weather;
