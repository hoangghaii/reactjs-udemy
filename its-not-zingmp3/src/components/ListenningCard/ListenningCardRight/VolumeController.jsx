import { Grid, Slider } from "@material-ui/core/";
import { VolumeDown, VolumeOff, VolumeUp } from "@material-ui/icons/";
import React, { useState } from "react";

function VolumeController(props) {
	const { audio } = props;
	const [volume, setVolume] = useState(100);

	const volumeChange = (e, newVal) => {
		setVolume(newVal);
		audio.volume = newVal / 100;
	};

	let volumeDisplay = <VolumeUp color="primary" />;

	if (audio.volume <= 0.5) {
		volumeDisplay = <VolumeDown color="primary" />;
	} else if (audio.volume === 0) {
		volumeDisplay = <VolumeOff color="primary" />;
	}

	const handleMute = () => {
		setVolume(0);
		audio.volume = 0;
		volumeDisplay = <VolumeOff color="primary" />;
	};

	return (
		<Grid container spacing={1} style={{ maxWidth: "800px" }}>
			<Grid item xs={2} onClick={handleMute}>
				{volumeDisplay}
			</Grid>
			<Grid item xs={10}>
				<Slider value={volume} onChange={volumeChange} />
			</Grid>
		</Grid>
	);
}

VolumeController.propTypes = {};

export default VolumeController;
