import React from "react";
import PropTypes from "prop-types";

function TopSongsItem(props) {
	const { dataSong, handleSetPlayer } = props;

	const handlePlayer = () => {
		if (!handleSetPlayer) return;
		handleSetPlayer();
	};

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
			<span className="btn-song-play" onClick={handlePlayer}>
				<i className="far fa-play-circle" />
			</span>
		</div>
	);
}

TopSongsItem.propTypes = {
	dataSong: PropTypes.object,
	handleSetPlayer: PropTypes.func,
};

TopSongsItem.defaultProps = {
	dataSong: null,
	handleSetPlayer: null,
};

export default TopSongsItem;
