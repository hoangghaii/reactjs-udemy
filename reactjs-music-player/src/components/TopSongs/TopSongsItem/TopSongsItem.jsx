import React from "react";
import PropTypes from "prop-types";

function TopSongsItem(props) {
	const { dataSong } = props;

	return (
		<div className="song">
			<img
				src={dataSong.images.coverarthq}
				alt={dataSong.share.subject}
				className="song-img"
			/>
			<div className="song-title">
				<span>{dataSong.title}</span>
				<span>{dataSong.subtitle}</span>
			</div>
			<span className="song-time">3.56 min</span>
			<a href="#0" className="btn-song-play">
				<i className="far fa-play-circle" />
			</a>
		</div>
	);
}

TopSongsItem.propTypes = {
	dataSong: PropTypes.object,
};

TopSongsItem.defaultProps = {
	dataSong: null,
};

export default TopSongsItem;
