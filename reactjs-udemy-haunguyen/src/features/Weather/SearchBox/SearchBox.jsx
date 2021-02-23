import PropTypes from "prop-types";
import React from "react";
import "./SearchBox.scss";

function SearchBox(props) {
	const { handleSubmit, handleInput } = props;

	const onSubmit = (e) => {
		e.preventDefault();

		if (!handleSubmit) return;
		handleSubmit(e);
	};

	const onInput = (e) => {
		e.preventDefault();

		if (!handleInput) return;
		handleInput(e);
	};

	return (
		<div className="search-box">
			<form onSubmit={onSubmit}>
				<input
					type="text"
					onChange={onInput}
					autoComplete="off"
					placeholder="Search for a city..."
				/>
			</form>
		</div>
	);
}

SearchBox.propTypes = {
	handleSubmit: PropTypes.func,
	handleInput: PropTypes.func,
};

SearchBox.defaultProps = {
	handleSubmit: null,
	handleInput: null,
};

export default SearchBox;
