import React from "react";
import PropTypes from "prop-types";

function Project(props) {
	return (
		<section className="project">
			<div className="heading">
				<div className="heading-header">
					<span className="heading-small">Featured Project</span>
					<span className="heading-number">05</span>
				</div>
			</div>
			<div className="project__content-wrapper">
				<div className="project__content">
					<h2 className="heading-2">Shark House</h2>
					<p className="paragraph">
						The desire was to create a unique building very diffent
						to the standard rectilinear rebuilds increasingly
						dotting the Christchurch suburban landscape.
					</p>
				</div>
				<div className="project__img-box project__img-box-1">
					<img
						src={process.env.PUBLIC_URL + "/images/image-17.jpg"}
						alt="Project Img"
						className="project__img"
					/>
				</div>
			</div>
			<div className="project__img-box project__img-box-2">
				<img
					src={process.env.PUBLIC_URL + "/images/image-18.jpg"}
					alt="Project "
					className="project__img"
				/>
			</div>
		</section>
	);
}

Project.propTypes = {};

export default Project;
