import React from "react";
import PropTypes from "prop-types";

function TopSongs(props) {
	return (
		<div className="right">
			<p>Top Songs</p>
			<div className="songs">
				<div className="song">
					<img
						src={
							process.env.PUBLIC_URL + "/assets/images/song1.jpg"
						}
						alt=""
						className="song-img"
					/>
					<div className="song-title">
						<span>Tootey Khab</span>
						<span>Amaan Malik</span>
					</div>
					<span className="song-time">3.56 min</span>
					<a href="#0" className="btn-song-play">
						<i className="far fa-play-circle" />
					</a>
				</div>
				<div className="song">
					<img
						src={
							process.env.PUBLIC_URL + "/assets/images/song2.jpg"
						}
						alt=""
						className="song-img"
					/>

					<div className="song-title">
						<span>Gali Gali</span>
						<span>Neha Kakkar</span>
					</div>
					<span className="song-time">4.12 min</span>
					<a href="#0" className="btn-song-play">
						<i className="far fa-play-circle" />
					</a>
				</div>
				<div className="song">
					<img
						src={
							process.env.PUBLIC_URL + "/assets/images/song3.jpg"
						}
						alt=""
						className="song-img"
					/>

					<div className="song-title">
						<span>Hong long</span>
						<span>Charlie Puth</span>
					</div>
					<span className="song-time">2.56 min</span>
					<a href="#0" className="btn-song-play">
						<i className="far fa-play-circle" />
					</a>
				</div>
				<div className="song">
					<img
						src={
							process.env.PUBLIC_URL + "/assets/images/song4.jpg"
						}
						alt=""
						className="song-img"
					/>

					<div className="song-title">
						<span>Lets Get Crazy</span>
						<span>Miley Cyrus</span>
					</div>
					<span className="song-time">5.46 min</span>
					<a href="#0" className="btn-song-play">
						<i className="far fa-play-circle" />
					</a>
				</div>
			</div>
		</div>
	);
}

TopSongs.propTypes = {};

export default TopSongs;
