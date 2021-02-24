import { environment } from "./../environment/environment";
import axiosClient from "./axiosClient";

const MAPBOX_BASE = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const WEATHER_BASE = "https://api.openweathermap.org/data/2.5/onecall";

const MAPBOX_API = environment.MAPBOX_API;
const OW_API = environment.WEATHER_API;

const getGeocode = async (location) => {
	const URL = `${MAPBOX_BASE}${location}.json?types=place&access_token=${MAPBOX_API}`;

	const geoResponse = await axiosClient.get(URL);
	const geoData = geoResponse.data.features[0];

	// The coordinates of the feature’s center in the form [longitude,latitude]
	const coordinates = geoData.center;
	// The ternary operator prevents return of placeName in non-Latin letters (places with Japanese letters for example)
	const placeName = geoData.matching_text
		? geoData.matching_text
		: geoData.text;

	const state = geoData.context[0].text;
	const country = geoData.context[1].text;

	return { coordinates, placeName, state, country };
};

export const getWeather = async (location) => {
	const geocodeResult = await getGeocode(location);
	const [lon, lat] = geocodeResult.coordinates;
	// .split(/\b\s[Ss]hi\b/) cut off japanese city sufix ('Iwata Shi' == after split() ==> 'Iwata')
	const placeName = {
		city: geocodeResult.placeName.split(/\b\s[Ss]hi\b/)[0],
		state: geocodeResult.state,
		country: geocodeResult.country,
	};

	const URL = `${WEATHER_BASE}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&lang=vi&appid=${OW_API}`;

	const weatherResponse = await axiosClient.get(URL);
	const weatherData = weatherResponse.data;

	const currentTemp = weatherData.current.temp;
	const todayWeather = weatherData.daily[0];
	const humidity = todayWeather.humidity;
	const weatherMain = todayWeather.weather[0].description;
	const tempMax = todayWeather.temp.max;
	const tempMin = todayWeather.temp.min;

	return [
		{ currentTemp, humidity, weatherMain, tempMax, tempMin },
		placeName,
	];
};
