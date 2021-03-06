import React from "react";
import Typed from "react-typed";

function Gallery(props) {
	let numbers = [];

	const initNumber = () => {
		for (let i = 5; i <= 16; i++) {
			numbers.push(i);
		}
	};

	initNumber();

	return (
		<section className="gallery">
			<div className="heading">
				<div className="heading-header">
					<span className="heading-small">Gallery Products</span>
					<span className="heading-number">04</span>
				</div>

				<h2 className="heading-2">
					<Typed
						strings={["<span>Our products serve lives</span>"]}
						typeSpeed={30}
						showCursor={false}
					/>
					<Typed
						strings={["<span>and our future</span>"]}
						typeSpeed={30}
						startDelay={60}
						showCursor={false}
					/>
				</h2>
			</div>
			<div className="gallery__container">
				{numbers.map((number, index) => (
					<div
						className={`gallery__img-box gallery__img-box--${
							index + 1
						}`}
						key={index}
					>
						<img
							src={
								process.env.PUBLIC_URL +
								`/images/image-${number}.jpg`
							}
							alt="Gallery Img"
							className="gallery__img"
						/>
					</div>
				))}
			</div>
		</section>
	);
}

Gallery.propTypes = {};

export default Gallery;
