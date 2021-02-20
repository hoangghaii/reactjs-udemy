import React, { useState } from "react";
import PropTypes from "prop-types";

function ToDoForm(props) {
	const { addTodo } = props;
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!addTodo) return;

		addTodo(value);
		setValue("");
	};

	return (
		<form className="flex mt-4" onSubmit={handleSubmit}>
			<input
				className="shadow appearance-none rounded w-full py-2 px-3 mr-4 text-grey-darker"
				placeholder="Add Todo"
				value={value}
				onChange={(event) => {
					setValue(event.target.value);
				}}
			/>
			<button
				type="submit"
				className="flex-no-shrink py-2 px-4 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
			>
				Add
			</button>
		</form>
	);
}

ToDoForm.propTypes = {
	saveTodo: PropTypes.string,
};

ToDoForm.defaultProps = {
	saveTodo: "",
};

export default ToDoForm;
