import React, { useEffect } from "react";
import PropTypes from "prop-types";

function Future(props) {
	const initCounting = () => {
		const elements = document.querySelectorAll(".future__counter--number");

		elements.forEach((element) => {
			element.innerHTML = 0;
		});
	};

	const countingUp = (duration) => {
		const start = 0;
		const elements = document.querySelectorAll(".future__counter--number");

		elements.forEach((element) => {
			const end = parseInt(element.dataset.count);

			if (end === start) {
				return;
			} else {
				const range = end - start;
				let current = start;
				const increment = start < end ? 1 : 0;
				const stepTime = Math.abs(Math.floor(duration / range));

				const timer = setInterval(function () {
					current += increment;
					element.innerHTML = current;
					if (current === end) {
						clearInterval(timer);
					}
				}, stepTime);
			}
		});
	};

	useEffect(() => {
		countingUp(3000);

		return () => {
			initCounting();
		};
	}, []);

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
						src={process.env.PUBLIC_URL + "/images/image-3.jpg"}
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
