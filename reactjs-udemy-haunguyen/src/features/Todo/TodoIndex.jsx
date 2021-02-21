import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFoundPage from "./../../components/NotFoundPage/NotFoundPage";
import Todo from "./pages/Todo";

function TodoIndex(props) {
	const match = useRouteMatch();

	return (
		<Switch>
			<Route exact path={match.path} component={Todo} />

			<Route component={NotFoundPage} />
		</Switch>
	);
}

TodoIndex.propTypes = {};

export default TodoIndex;
