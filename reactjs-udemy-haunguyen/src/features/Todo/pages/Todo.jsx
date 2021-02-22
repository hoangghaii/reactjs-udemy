import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import TodoFilterGroup from "./../components/TodoFilterGroup/TodoFilterGroup";
import ToDoForm from "./../components/TodoForm/ToDoForm";
import TodoList from "./../components/TodoList/TodoList";

function Todo(props) {
	const initTodoList = [
		{
			id: 0,
			title: "Add another component to Tailwind Components",
			status: "working",
		},
		{
			id: 1,
			title: "Submit Todo App Component to Tailwind Components",
			status: "done",
		},
		{
			id: 2,
			title: "Add another component to Tailwind Components Again",
			status: "working",
		},
	];

	const location = useLocation();
	const history = useHistory();
	const match = useRouteMatch();

	const [todoList, setTodoList] = useState(initTodoList);
	const [filteredStatus, setFilteredStatus] = useState(() => {
		const params = queryString.parse(location.search);
		return params.status || "all";
	});

	useEffect(() => {
		const params = queryString.parse(location.search);
		setFilteredStatus(params.status || "all");
	}, [location.search]);

	const handleChangeStatus = (index) => {
		//Change status of item where item.id === index
		let itemToggle = todoList.map((item) => {
			return item.id === Number(index)
				? {
						...item,
						status: item.status === "working" ? "done" : "working",
				  }
				: { ...item };
		});

		//update todoList
		setTodoList(itemToggle);
	};

	const handleDelete = (index) => {
		//remove item from list where item.id === index
		let itemDelete = todoList.filter((item) => {
			return item.id !== Number(index);
		});

		//update todoList
		setTodoList(itemDelete);
	};

	const addTodo = (value) => {
		// add new todo item to array
		const newToDoList = [
			...todoList,
			{ id: todoList.length + 1, title: value.title, status: "working" },
		];

		//update todoList
		setTodoList(newToDoList);
	};

	const handleShowAll = () => {
		// setFilteredStatus("all");

		const queryParams = { status: "all" };
		history.push({
			pathname: match.path,
			search: queryString.stringify(queryParams),
		});
	};

	const handleShowDone = () => {
		// setFilteredStatus("done");

		const queryParams = { status: "done" };
		history.push({
			pathname: match.path,
			search: queryString.stringify(queryParams),
		});
	};

	const handleShowWorking = () => {
		// setFilteredStatus("working");

		const queryParams = { status: "working" };
		history.push({
			pathname: match.path,
			search: queryString.stringify(queryParams),
		});
	};

	const renderedList = useMemo(() => {
		return todoList.filter(
			(todo) => todo.status === filteredStatus || filteredStatus === "all"
		);
	}, [todoList, filteredStatus]);

	return (
		<div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
			<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-2lg">
				<div className="mb-4">
					<h1 className="text-grey-darkest">Todo List</h1>
					<ToDoForm addTodo={addTodo} />
				</div>

				<TodoList
					todoList={renderedList}
					handleChangeStatus={handleChangeStatus}
					handleDelete={handleDelete}
				/>

				<TodoFilterGroup
					handleShowAll={handleShowAll}
					handleShowDone={handleShowDone}
					handleShowWorking={handleShowWorking}
				/>
			</div>
		</div>
	);
}

Todo.propTypes = {};

export default Todo;
