import { IconButton } from "@material-ui/core/";
import { SkipPrevious } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";

function PreviousButton(props) {
	const { onPlayPrevious } = props;

	return (
		<IconButton color="primary" aria-label="Pause" onClick={onPlayPrevious}>
			<SkipPrevious fontSize="large" />
		</IconButton>
	);
}

PreviousButton.propTypes = {
	onPlayPrevious: PropTypes.func,
};

PreviousButton.defaultProps = {
	onPlayPrevious: null,
};

export default PreviousButton;
