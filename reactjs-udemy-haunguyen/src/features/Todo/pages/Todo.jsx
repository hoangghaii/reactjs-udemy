import queryString from "query-string";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import {
	Route,
	useHistory,
	useLocation,
	useRouteMatch,
} from "react-router-dom";
import todoApi from "./../../../apis/todoApi";
import Loading from "./../../../components/Loading/Loading";
import NotFoundPage from "./../../../components/NotFoundPage/NotFoundPage";
import TodoFilterGroup from "./../components/TodoFilterGroup/TodoFilterGroup";
import ToDoForm from "./../components/TodoForm/ToDoForm";
import TodoList from "./../components/TodoList/TodoList";

function Todo(props) {
	const [dataRespond, setDataRespond] = useState({
		loading: true,
		data: null,
		status: undefined,
	});

	const getAllData = async () => {
		return await todoApi
			.getAll()
			.then((dataRes) =>
				setDataRespond({
					loading: false,
					data: dataRes.data,
					status: dataRes.status,
				})
			)
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getAllData();
	}, []);
	// useEffect(() => {
	// 	(async () => {
	// 		await todoApi
	// 			.getAll()
	// 			.then((dataRes) =>
	// 				setDataRespond({
	// 					data: dataRes.data,
	// 					status: dataRes.status,
	// 				}),
	// 				setLoading(false)
	// 			)
	// 			.catch((error) => {
	// 				console.log(error);
	// 			});
	// 	})();
	// }, []);

	const location = useLocation();
	const history = useHistory();
	const match = useRouteMatch();

	const [todoList, setTodoList] = useState([]);
	useEffect(() => {
		setTodoList(dataRespond.data);
	}, [dataRespond.data]);

	const [filteredStatus, setFilteredStatus] = useState(() => {
		const params = queryString.parse(location.search);
		return params.status || "all";
	});

	useEffect(() => {
		const params = queryString.parse(location.search);
		setFilteredStatus(params.status || "all");
	}, [location.search]);

	const handleChangeStatus = (index) => {
		let itemToggle = todoList.filter((item) => {
			return item.id === index;
		});

		let data = itemToggle[0];
		data.status = !data.status;

		setDataRespond({ loading: true });

		(async () => {
			await todoApi.update(data);
			getAllData();
		})();
	};

	const handleDelete = (index) => {
		setDataRespond({ loading: true });

		(async () => {
			await todoApi.remove(index);
			getAllData();
		})();
	};

	const addTodo = (value) => {
		const newItem = {
			id: todoList.length + 1 + "",
			title: value.title,
			status: false,
		};

		setDataRespond({ loading: true });

		(async () => {
			await todoApi.add(newItem);
			getAllData();
		})();
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

		const queryParams = { status: true };
		history.push({
			pathname: match.path,
			search: queryString.stringify(queryParams),
		});
	};

	const handleShowWorking = () => {
		// setFilteredStatus("working");

		const queryParams = { status: false };
		history.push({
			pathname: match.path,
			search: queryString.stringify(queryParams),
		});
	};

	const renderedList = useMemo(() => {
		if (todoList) {
			return todoList.filter(
				(todo) =>
					todo.status.toString() === filteredStatus ||
					filteredStatus === "all"
			);
		}
	}, [todoList, filteredStatus]);

	let content = null;

	if (dataRespond.loading) {
		content = <Loading />;
	} else if (!dataRespond.status) {
		content = <Route component={NotFoundPage} />;
	} else if (dataRespond.data) {
		content = (
			<div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
				<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-2lg">
					<div className="mb-4">
						<h1 className="text-grey-darkest">Todo List</h1>
						<ToDoForm addTodo={addTodo} />
					</div>

					{renderedList && (
						<TodoList
							todoList={renderedList}
							handleChangeStatus={handleChangeStatus}
							handleDelete={handleDelete}
						/>
					)}

					<TodoFilterGroup
						handleShowAll={handleShowAll}
						handleShowDone={handleShowDone}
						handleShowWorking={handleShowWorking}
					/>
				</div>
			</div>
		);
	}

	return <Fragment>{content}</Fragment>;
}

Todo.propTypes = {};

export default Todo;
