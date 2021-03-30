import React from "react";
import Typed from "react-typed";
import Tilt from "react-parallax-tilt";

function Believe(props) {
	return (
		<section className="believe">
			<div className="heading">
				<div className="heading-header">
					<span className="heading-small">First Light Studio NZ</span>
					<span className="heading-number">01</span>
				</div>
				<h1 className="heading-1">
					<Typed
						strings={["<span>We Believe in</span>"]}
						typeSpeed={30}
						showCursor={false}
					/>
					<Typed
						strings={["<span>Great Architecture</span>"]}
						typeSpeed={30}
						startDelay={30}
						showCursor={false}
					/>
				</h1>
				<p className="paragraph">
					We believe in its enduring power to enhance our wellbeing,
					and its ability to work with nature, not against it.
				</p>
			</div>
			<div className="believe__img-box">
				<Tilt
					tiltMaxAngleX={5}
					tiltMaxAngleY={5}
					perspective={900}
					transitionSpeed={2000}
					gyroscope={true}
				>
					<img
						src={process.env.PUBLIC_URL + "/images/image-2.jpg"}
						alt="Believe"
						className="believe__img"
					/>
				</Tilt>
			</div>
		</section>
	);
}

Believe.propTypes = {};

export default Believe;
