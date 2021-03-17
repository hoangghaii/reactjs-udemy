import React from "react";
import PropTypes from "prop-types";

function Believe(props) {
	return (
		<section className="believe">
			<div className="heading">
				<div className="heading-header">
					<span className="heading-small">First Light Studio NZ</span>
					<span className="heading-number">01</span>
				</div>
				<h1 className="heading-1">
					<span>We Believe in</span>
					<span>Great Architecture</span>
				</h1>
				<p className="paragraph">
					We believe in its enduring power to enhance our wellbeing,
					and its ability to work with nature, not against it.
				</p>
			</div>
			<div className="believe__img-box">
				<img
					src={process.env.PUBLIC_URL + "/images/image-2.jpg"}
					alt="Believe"
					className="believe__img"
				/>
			</div>
		</section>
	);
}

Believe.propTypes = {};

export default Believe;
