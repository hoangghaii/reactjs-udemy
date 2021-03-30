import React, { lazy, Suspense } from "react";
// import ScrollAnimation from "react-animate-on-scroll";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "../loading/Loading";

const Believe = lazy(() => import("./believe/Believe"));
const Collab = lazy(() => import("./collab/Collab"));
const Future = lazy(() => import("./future/Future"));
const Gallery = lazy(() => import("./gallery/Gallery"));
const Project = lazy(() => import("./project/Project"));

function Main(props) {
	return (
		<main className="main">
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route path="/about">
						{/* <ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						delay={1000}
					> */}
						<Believe />
						{/* </ScrollAnimation> */}
					</Route>

					<Route path="/featured">
						{/* <ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						delay={1000}
					> */}
						<Future />
						{/* </ScrollAnimation> */}
					</Route>

					<Route path="/collaborative">
						{/* <ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						delay={1000}
					> */}
						<Collab />
						{/* </ScrollAnimation> */}
					</Route>

					<Route path="/gallery">
						{/* <ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						delay={1000}
					> */}
						<Gallery />
						{/* </ScrollAnimation> */}
					</Route>

					<Route path="/projects">
						{/* <ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						delay={1000}
					> */}
						<Project />
						{/* </ScrollAnimation> */}
					</Route>

					<Route path="/">
						{/* <ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						delay={1000}
					> */}
						<Believe />
						{/* </ScrollAnimation> */}
					</Route>

					<Redirect from="/" to="/about" />
				</Switch>
			</Suspense>
		</main>
	);
}

Main.propTypes = {};

export default Main;
