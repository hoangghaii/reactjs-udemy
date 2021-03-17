import React from "react";
import PropTypes from "prop-types";

function Future(props) {
	return (
		<section className="future">
			<div className="heading">
				<div className="heading-header">
					<span className="heading-small">
						Redesigning Our Living Future
					</span>
					<span className="heading-number">02</span>
				</div>
				<h2 className="heading-2">
					<span>Our purpose is to</span>
					<span>redesigning our living future</span>
				</h2>
			</div>
			<div className="future__content-wrapper">
				<div className="future__content">
					<p className="paragraph dropcap">
						To create living and working enviroments that flex with
						the rhythms of life and grow beaitufully together with
						their matural surroundings. Brillantly designed spaces
						that enhace life and our connection to our land and each
						orther, for generations to come. And passionate about
						reshaping how we live, work and interact. As a design
						house, we collaborate with commericial and residential
						customer looking for something truly to their needs,
						site and personal vision.
					</p>
					<div className="future__counter">
						<div className="future__counter--item">
							<span
								className="future__counter--number"
								data-count={76}
							>
								0
							</span>
							<p className="future__counter--text">
								Adaptive Space Projects
							</p>
						</div>
						<div className="future__counter--item">
							<span
								className="future__counter--number"
								data-count={32}
							>
								0
							</span>
							<p className="future__counter--text">
								Environmental Awards
							</p>
						</div>
					</div>
				</div>
				<div className="future__img-box">
					<img
						src="./images/image-3.jpg"
						alt="Future Img"
						className="future__img"
					/>
				</div>
			</div>
		</section>
	);
}

Future.propTypes = {};

export default Future;
