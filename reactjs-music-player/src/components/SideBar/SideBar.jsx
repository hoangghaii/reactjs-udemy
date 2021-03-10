import React from "react";
import PropTypes from "prop-types";

function SideBar(props) {
	return (
		<div className="slidebar">
			<div className="logo">
				<i className="logo-icon fab fa-soundcloud" />
				<span className="logo-text">SoundFly</span>
			</div>
			<div className="menu">
				<p>Menu</p>
				<a href="#0" className="menu-active">
					<i className="fas fa-home" />
					Home
				</a>
				<a href="#0">
					<i className="fas fa-compass" />
					Discover
				</a>
				<a href="#0">
					<i className="fas fa-heart" />
					Favorite
				</a>
				<a href="#0">
					<i className="fas fa-search" />
					Search
				</a>
			</div>
			<div className="library">
				<p>Library</p>
				<a href="#0">
					<i className="fas fa-compact-disc" />
					Singles
				</a>
				<a href="#0">
					<i className="fas fa-compact-disc" />
					Albums
				</a>
				<a href="#0">
					<i className="fas fa-music" />
					Artist
				</a>
			</div>
			<div className="my-playlist">
				<p>My Playlist</p>
				<a href="#0">
					<i className="fas fa-bookmark" />
					English Song
				</a>
				<a href="#0">
					<i className="fas fa-bookmark" />
					Hindi Plays
				</a>
				<a href="#0">
					<i className="fas fa-bookmark" />
					Bangia Songs
				</a>
			</div>
		</div>
	);
}

SideBar.propTypes = {};

export default SideBar;
