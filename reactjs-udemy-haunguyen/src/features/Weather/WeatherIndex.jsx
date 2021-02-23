import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFoundPage from "./../../components/NotFoundPage/NotFoundPage";
import Weather from "./Weather/Weather";

function WeatherIndex(props) {
	const match = useRouteMatch();

	return (
		<Switch>
			<Route exact path={match.path} component={Weather} />

			<Route component={NotFoundPage} />
		</Switch>
	);
}

WeatherIndex.propTypes = {};

export default WeatherIndex;
