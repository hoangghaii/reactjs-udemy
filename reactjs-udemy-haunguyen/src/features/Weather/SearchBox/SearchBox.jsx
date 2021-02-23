import PropTypes from "prop-types";
import React, { useState } from "react";
import "./SearchBox.scss";

function SearchBox(props) {
	const { handleSubmit } = props;
	const [valueInput, setValueInput] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();

		if (!handleSubmit) return;
		handleSubmit(valueInput);

		setValueInput("");
	};

	return (
		<div className="search-box">
			<form onSubmit={onSubmit}>
				<input
					type="text"
					autoComplete="off"
					placeholder="Search for a city..."
					value={valueInput}
					onChange={(event) => {
						setValueInput(event.target.value);
					}}
				/>
			</form>
		</div>
	);
}

SearchBox.propTypes = {
	handleSubmit: PropTypes.func,
};

SearchBox.defaultProps = {
	handleSubmit: null,
};

export default SearchBox;
