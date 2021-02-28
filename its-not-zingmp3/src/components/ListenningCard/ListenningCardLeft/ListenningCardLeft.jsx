import { Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: "flex",
		"& > *": {
			margin: theme.spacing(1),
		},
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

function ListenningCardLeft(props) {
	const { song } = props;
	const classes = useStyles();

	const getSongImage = (songSrc) => {
		return process.env.PUBLIC_URL + "assets/images/" + songSrc;
	};

	let isLiked = false;

	const addLiked = () => {
		isLiked = !isLiked;
		console.log(isLiked);
	};

	return (
		<div className={classes.root}>
			<Grid
				container
				spacing={3}
				direction="row"
				justify="space-evenly"
				alignItems="center"
			>
				<Grid item xs={4}>
					<Avatar
						alt={song.desc}
						src={getSongImage(song.img_src)}
						className={classes.large}
					/>
				</Grid>

				<Grid item xs={6}>
					<h4>{song.title}</h4>
					<p>{song.artist}</p>
				</Grid>

				<Grid item xs={2}>
					<div onClick={addLiked}>
						{isLiked === true && <FavoriteIcon color="primary" />}
						{isLiked === false && (
							<FavoriteBorderIcon color="primary" />
						)}
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

ListenningCardLeft.propTypes = {};

export default ListenningCardLeft;
