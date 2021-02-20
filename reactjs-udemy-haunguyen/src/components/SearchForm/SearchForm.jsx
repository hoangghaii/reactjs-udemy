import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchForm.scss";

function SearchForm(props) {
	const { handleSearch } = props;
	const [value, setValue] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!handleSearch) return;

		handleSearch(value);
	};

	return (
		<div className="relative p-8 w-96">
			<form
				className="bg-white flex items-center rounded-full shadow-xl"
				onSubmit={handleSubmit}
			>
				<input
					className="rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
					type="text"
					placeholder="Search"
					value={value}
					onChange={(event) => {
						setValue(event.target.value);
					}}
				/>

				<div className="absolute right-10 p-2 search-box rounded-full">
					<button
						type="submit"
						className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-400 focus:outline-none flex items-center justify-center"
					>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</div>
			</form>
		</div>
	);
}

SearchForm.propTypes = {
	handleSearch: PropTypes.func,
};

SearchForm.defaultProps = {
	handleSearch: null,
};

export default SearchForm;
