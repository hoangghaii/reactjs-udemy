import React from "react";
import PropTypes from "prop-types";

function Gallery(props) {
	return (
		<section className="gallery">
			<div className="heading">
				<div className="heading-header">
					<span className="heading-small">Gallery Products</span>
					<span className="heading-number">04</span>
				</div>
				<h2 className="heading-2">
					<span>Our products serve lives</span>
					<span>and our future</span>
				</h2>
			</div>
			<div className="gallery__container">
				<div className="gallery__img-box gallery__img-box--1">
					<img
						src="./images/image-5.jpg"
						alt="Gallery Img"
						className="gallery__img"
					/>
				</div>
				<div className="gallery__img-box gallery__img-box--2">
					<img
						src="./images/image-6.jpg"
						alt="Gallery Img"
						className="gallery__img"
					/>
				</div>
				<div className="gallery__img-box gallery__img-box--3">
					<img
						src="./images/image-7.jpg"
						alt="Gallery Img"
						className="gallery__img"
					/>
				</div>
				<div className="gallery__img-box gallery__img-box--4">
					<img
						src="./images/image-8.jpg"
						alt="Gallery Img"
						className="gallery__img"
					/>
				</div>
				<div className="gallery__img-box gallery__img-box--5">
					<img
						src="./images/image-9.jpg"
						alt="Gallery Img"
						className="gallery__img"
					/>
				</div>
				<div className="gallery__img-box gallery__img-box--6">
					<img
						src="./images/image-10.jpg"
						alt="Gallery Img"
						className="gallery__img"
					/>
				</div>
				<div className="gallery__img-box gallery__img-box--7">
					<img
						src="./images/image-11.jpg"
						alt="Gallery Img"
						className="gallery__img"
					/>
				</div>
				<div className="gallery__img-box gallery__img-box--8">
					<img
						src="./images/image-12.jpg"
						alt="Gallery Img"
						className="gallery__img"
					/>
				</div>
				<div className="gallery__img-box gallery__img-box--9">
					<img
						src="./images/image-13.jpg"
						alt="Gallery Img"
						className="gallery__img"
					/>
				</div>
				<div className="gallery__img-box gallery__img-box--10">
					<img
						src="./images/image-14.jpg"
						alt="Gallery Img"
						className="gallery__img"
					/>
				</div>
				<div className="gallery__img-box gallery__img-box--11">
					<img
						src="./images/image-15.jpg"
						alt="Gallery Img"
						className="gallery__img"
					/>
				</div>
				<div className="gallery__img-box gallery__img-box--12">
					<img
						src="./images/image-16.jpg"
						alt="Gallery Img"
						className="gallery__img"
					/>
				</div>
			</div>
		</section>
	);
}

Gallery.propTypes = {};

export default Gallery;
