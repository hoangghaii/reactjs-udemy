import { IconButton } from "@material-ui/core/";
import { SkipNext } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";

function NextButton(props) {
	const { onPlayNext } = props;

	return (
		<IconButton color="primary" aria-label="Next" onClick={onPlayNext}>
			<SkipNext fontSize="large" />
		</IconButton>
	);
}

NextButton.propTypes = {
	onPlayNext: PropTypes.func,
};

NextButton.defaultProps = {
	onPlayNext: null,
};

export default NextButton;
