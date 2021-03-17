import React from "react";
import PropTypes from "prop-types";
import Believe from "./believe/Believe";
import Future from "./future/Future";
import Collab from "./collab/Collab";
import Gallery from "./gallery/Gallery";
import Project from "./project/Project";

function Main(props) {
	return (
		<main className="main">
			<Believe />

			<Future />

			<Collab />

			<Gallery />

			<Project />
		</main>
	);
}

Main.propTypes = {};

export default Main;
