import React from "react";
import PropTypes from "prop-types";

function Header(props) {
	return (
		<div className="top-content">
			<div
				className="trending"
				style={{
					backgroundImage:
						"url(" +
						process.env.PUBLIC_URL +
						"/assets/images/layout.jpg)",
				}}
			>
				<div className="left">
					<p className="type">Trending</p>
					<p className="title">Eleven</p>
					<p className="artist">Khalid ft. Summer</p>
					<p className="view">7.3 Million listens</p>
					<a href="#0" className="btn-play">
						Play Now
					</a>
				</div>
				<div className="right">
					<img
						src={
							process.env.PUBLIC_URL + "/assets/images/avatar.jpg"
						}
						alt=""
					/>
					Rahman Nayan
				</div>
			</div>
		</div>
	);
}

Header.propTypes = {};

export default Header;
