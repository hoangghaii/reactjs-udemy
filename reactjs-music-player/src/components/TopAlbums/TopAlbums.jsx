import React from "react";
import PropTypes from "prop-types";

function TopAlbums(props) {
	return (
		<div className="left-side-top">
			<div className="top-albums-title">
				<span>Top Albums</span>
				<span>See all</span>
			</div>
			<div className="top-albums">
				<div className="card-albums">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/top-album1.jpg"
						}
						alt=""
					/>
					<p>Kodaline</p>
				</div>
				<div className="card-albums">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/top-album2.jpg"
						}
						alt=""
					/>
					<p>American Teen</p>
				</div>
				<div className="card-albums">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/top-album3.png"
						}
						alt=""
					/>
					<p>Charlie Yue</p>
				</div>
				<div className="card-albums">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/top-album4.jpg"
						}
						alt=""
					/>
					<p>Ed Sheeran</p>
				</div>
				<div className="card-albums">
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/images/top-album5.jpg"
						}
						alt=""
					/>
					<p>Selena Gomez</p>
				</div>
			</div>
		</div>
	);
}

TopAlbums.propTypes = {};

export default TopAlbums;
