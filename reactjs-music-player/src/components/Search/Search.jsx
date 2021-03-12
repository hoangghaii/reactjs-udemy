import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./Search.scss";
import SearchResult from "./SearchResult/SearchResult";
import { useTransition, animated } from "react-spring";

function Search(props) {
	const { showMenu } = props;

	const transitions = useTransition(showMenu, null, {
		from: { opacity: 0, transform: "translateX(-100%)" },
		enter: { opacity: 1, transform: "translateX(0)" },
		leave: { opacity: 0, transform: "translateX(-100%)" },
	});

	return (
		<Fragment>
			{transitions.map(
				({ item, key, props }) =>
					item && (
						<animated.div
							key={key}
							style={props}
							className="search-container"
						>
							<div className="input-wrapper">
								<i className="fas fa-search" />
								<input
									type="text"
									name="product-search"
									id="product-search"
									placeholder="Enter song, track or keyword"
								/>
								<button className="btn-esc">esc</button>
							</div>
							<h5 className="search-recent">Recent</h5>
							<SearchResult />
						</animated.div>
					)
			)}

			{/* <div className="search-container">
				<div className="input-wrapper">
					<i className="fas fa-search" />
					<input
						type="text"
						name="product-search"
						id="product-search"
						placeholder="Enter song, track or keyword"
					/>
					<button className="btn-esc">esc</button>
				</div>
				<h5 className="search-recent">Recent</h5>
				<SearchResult />
			</div> */}
		</Fragment>
	);
}

Search.propTypes = {};

export default Search;
