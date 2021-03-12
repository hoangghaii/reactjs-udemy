import React from "react";

function SideBar(props) {
	return (
		<div className="slidebar">
			<div className="logo">
				<i className="logo-icon fab fa-soundcloud" />
				<span className="logo-text">SoundFly</span>
			</div>
			<div className="menu">
				<p>Menu</p>
				<span className="menu-active slidebar-link">
					<i className="fas fa-home" />
					Home
				</span>
				<span className="slidebar-link">
					<i className="fas fa-compass" />
					Discover
				</span>
				<span className="slidebar-link">
					<i className="fas fa-heart" />
					Favorite
				</span>
				<span className="slidebar-link">
					<i className="fas fa-search" />
					Search
				</span>
			</div>
			<div className="library">
				<p>Library</p>
				<span className="slidebar-link">
					<i className="fas fa-compact-disc" />
					Singles
				</span>
				<span className="slidebar-link">
					<i className="fas fa-compact-disc" />
					Albums
				</span>
				<span className="slidebar-link">
					<i className="fas fa-music" />
					Artist
				</span>
			</div>
			<div className="my-playlist">
				<p>My Playlist</p>
				<span className="slidebar-link">
					<i className="fas fa-bookmark" />
					English Song
				</span>
				<span className="slidebar-link">
					<i className="fas fa-bookmark" />
					Hindi Plays
				</span>
				<span className="slidebar-link">
					<i className="fas fa-bookmark" />
					Bangia Songs
				</span>
			</div>
		</div>
	);
}

SideBar.propTypes = {};

export default SideBar;
