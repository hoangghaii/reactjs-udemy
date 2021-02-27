import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { toast } from "react-toastify";

function PrivateRoute({ component: Component, ...rest }) {
	const loggedInUser = useSelector((state) => state.user.current);
	const isLoggedIn = !!loggedInUser.id;

	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn ? (
					<Component {...props} />
				) : (
					(toast.info(
						<div>
							<h4>Hey yooo!</h4>
							<span>You must sign in to see this page </span>
						</div>
					),
					(
						<Redirect
							to={{
								pathname: "/signin",
								state: { from: props.location },
							}}
						/>
					))
				)
			}
		/>
	);
}

export default PrivateRoute;
