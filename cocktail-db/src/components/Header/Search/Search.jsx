import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search(props) {
	const { onSubmit } = props;
	const [value, setValue] = useState("");

	const handleInput = (e) => {
		e.preventDefault();

		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!onSubmit) return;
		onSubmit(value);
	};

	return (
		<form
			className="flex items-center ml-auto bg-gray-100 self-stretch custom-rounded px-4 w-2/3"
			onSubmit={handleSubmit}
		>
			<FontAwesomeIcon icon={faSearch} />
			<input
				type="text"
				className="px-4 self-stretch bg-transparent flex-grow outline-none"
				placeholder="Search"
				value={value}
				onChange={handleInput}
			/>
		</form>
	);
}

Search.propTypes = {
	onSubmit: PropTypes.func,
};

Search.defaultProps = {
	onSubmit: null,
};

export default Search;
