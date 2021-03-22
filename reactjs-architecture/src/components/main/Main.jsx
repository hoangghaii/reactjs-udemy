import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Route, Switch } from "react-router-dom";
import Believe from "./believe/Believe";
import Collab from "./collab/Collab";
import Future from "./future/Future";
import Gallery from "./gallery/Gallery";
import Project from "./project/Project";
import ReactFullpage from "@fullpage/react-fullpage";

function Main(props) {
	return (
		<main className="main">
			<ReactFullpage
				scrollingSpeed={1000}
				render={() => {
					return (
						<ReactFullpage.Wrapper>
							<ScrollAnimation
								animateIn="fadeIn"
								animateOut="fadeOut"
								delay={1000}
							>
								<Believe />
							</ScrollAnimation>

							<ScrollAnimation
								animateIn="fadeIn"
								animateOut="fadeOut"
								delay={1000}
							>
								<Future />
							</ScrollAnimation>

							<ScrollAnimation
								animateIn="fadeIn"
								animateOut="fadeOut"
								delay={1000}
							>
								<Collab />
							</ScrollAnimation>

							<ScrollAnimation
								animateIn="fadeIn"
								animateOut="fadeOut"
								delay={1000}
							>
								<Gallery />
							</ScrollAnimation>

							<ScrollAnimation
								animateIn="fadeIn"
								animateOut="fadeOut"
								delay={1000}
							>
								<Project />
							</ScrollAnimation>

							<ScrollAnimation
								animateIn="fadeIn"
								animateOut="fadeOut"
								delay={1000}
							>
								<Believe />
							</ScrollAnimation>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
			{/* <Switch>
				<Route exact path="/about">
					<ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						delay={1000}
					>
						<Believe />
					</ScrollAnimation>
				</Route>

				<Route exact path="/featured">
					<ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						delay={1000}
					>
						<Future />
					</ScrollAnimation>
				</Route>

				<Route exact path="/collaborative">
					<ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						delay={1000}
					>
						<Collab />
					</ScrollAnimation>
				</Route>

				<Route exact path="/gallery">
					<ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						delay={1000}
					>
						<Gallery />
					</ScrollAnimation>
				</Route>

				<Route exact path="/projects">
					<ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						delay={1000}
					>
						<Project />
					</ScrollAnimation>
				</Route>

				<Route exact path="/">
					<ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						delay={1000}
					>
						<Believe />
					</ScrollAnimation>
				</Route>
			</Switch> */}
		</main>
	);
}

Main.propTypes = {};

export default Main;
