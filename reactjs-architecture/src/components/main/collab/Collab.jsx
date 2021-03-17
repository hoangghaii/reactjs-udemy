import React from "react";
import PropTypes from "prop-types";

function Collab(props) {
	return (
		<section className="collab">
			<div className="heading">
				<div className="heading-header">
					<span className="heading-small">
						A Collaborative Studio
					</span>
					<span className="heading-number">03</span>
				</div>
			</div>
			<div className="collab__content-wrapper">
				<div className="collab__img-box">
					<img
						src="./images/image-4.jpg"
						alt="Collaborative Img"
						className="collab__img"
					/>
				</div>
				<div className="collab__content">
					<h3 className="heading-3">
						Great design is an extension of who we are
					</h3>
					<p className="paragraph">
						As architects and designers we work in a creative and
						collaborative studio environment. The design process
						should be easy and rewarding collaboration from start to
						finish.
					</p>
					<p className="paragraph--small">
						We understand that the design process is not a one size
						fits all type situation and will adapt our simple four
						stage process to perfectly suit your vision. Whether you
						want to modify one of pre-designed plans or let us come
						up with something completely unique to you, we will
						tailor our process to suit
					</p>
					<button className="btn btn-cta">
						our approach
						<span className="btn-cta__icon">→</span>
					</button>
				</div>
			</div>
		</section>
	);
}

Collab.propTypes = {};

export default Collab;
