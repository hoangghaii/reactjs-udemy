import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./../TodoItem/TodoItem";

function TodoList(props) {
	const { todoList, handleChangeStatus, handleDelete } = props;

	return (
		<div className="w-full">
			{todoList.map((todo, index) => (
				<TodoItem
					key={index}
					todo={todo}
					handleChangeStatus={handleChangeStatus}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
}

TodoList.propTypes = {
	todoList: PropTypes.array.isRequired,
	handleToggle: PropTypes.func,
	handleDelete: PropTypes.func,
};

TodoList.defaultProps = {
	handleToggle: null,
	handleDelete: null,
};

export default TodoList;
