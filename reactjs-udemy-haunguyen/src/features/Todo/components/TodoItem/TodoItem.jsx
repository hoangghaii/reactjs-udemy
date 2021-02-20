import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
	const { todo, handleChangeStatus, handleDelete } = props;

	let titleClassName = "mr-auto text-left ";
	let btnStatusClassName =
		"flex-no-shrink py-2 px-4 ml-4 mr-2 border-2 rounded hover:text-white ";

	if (todo.status === "done") {
		titleClassName += " line-through text-green";
		btnStatusClassName += " text-grey border-grey hover:bg-grey";
	} else {
		titleClassName += " text-grey-darkest";
		btnStatusClassName += " text-green border-green hover:bg-green";
	}

	const handleClickItem = (index) => {
		if (!handleChangeStatus) return;

		handleChangeStatus(index);
	};

	const handleDeleteItem = (index) => {
		if (!handleDelete) return;

		handleDelete(index);
	};

	return (
		<div className="flex mb-4 items-center">
			<p className={titleClassName}>{todo.title}</p>
			<div className="flex items-center align-center">
				<button
					className={btnStatusClassName}
					onClick={() => handleClickItem(todo.id)}
				>
					{todo.status === "done" ? "Not Done" : "Done"}
				</button>
				<button
					className="flex-no-shrink py-2 px-4 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
					onClick={() => handleDeleteItem(todo.id)}
				>
					Remove
				</button>
			</div>
		</div>
	);
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	handleToggle: PropTypes.func,
};

TodoItem.defaultProps = {
	handleToggle: null,
};

export default TodoItem;
