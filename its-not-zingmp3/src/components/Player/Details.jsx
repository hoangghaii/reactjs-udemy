import PropTypes from "prop-types";
import React from "react";

function Details(props) {
	const { song } = props;

	const getSongImage = (songSrc) => {
		return process.env.PUBLIC_URL + "assets/images/" + songSrc;
	};

	return (
		<div className="c-player--details">
			<div className="details-img">
				<img src={getSongImage(song.img_src)} alt={song.desc} />
			</div>
			<h3 className="details-title">{song.title}</h3>
			<h4 className="details-artist">{song.artist}</h4>
		</div>
	);
}

Details.propTypes = {
	song: PropTypes.object,
	control: PropTypes.bool,
};

Details.defaultProps = {
	song: null,
	control: false,
};

export default Details;
