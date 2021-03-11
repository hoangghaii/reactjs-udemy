import React from "react";
import PropTypes from "prop-types";

function TopAlbumsItem(props) {
	const { dataAlbum, handleSetPlayer } = props;

	const handlePlayer = () => {
		if (!handleSetPlayer) return;
		handleSetPlayer();
	};

	return (
		<div className="card-albums">
			<img
				src={dataAlbum.images.coverarthq}
				alt={dataAlbum.share.subject}
				onClick={handlePlayer}
			/>
			<p onClick={handlePlayer}>{dataAlbum.title}</p>
		</div>
	);
}

TopAlbumsItem.propTypes = {
	dataAlbum: PropTypes.object,
	handleSetPlayer: PropTypes.func,
};

TopAlbumsItem.defaultProps = {
	dataAlbum: null,
	handleSetPlayer: null,
};

export default TopAlbumsItem;
