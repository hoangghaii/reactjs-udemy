import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFoundPage from "./../../components/NotFoundPage/NotFoundPage";
import Album from "./pages/Album";

function AlbumIndex(props) {
	const match = useRouteMatch();

	return (
		<Switch>
			<Route exact path={match.path} component={Album} />

			<Route component={NotFoundPage} />
		</Switch>
	);
}

AlbumIndex.propTypes = {};

export default AlbumIndex;
