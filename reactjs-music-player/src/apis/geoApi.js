import axiosClient from "./axiosClient";
const MAPBOX_BASE = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const MAPBOX_API = process.env.REACT_APP_MAPBOX_API;

export const getGeocode = async (location) => {
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
