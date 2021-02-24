import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/FormControl/InputField/InputField";

function ToDoForm(props) {
	const { addTodo } = props;

	const schema = yup.object().shape({
		title: yup
			.string()
			.required("Please enter title")
			.min(5, "Title is to short"),
	});

	const form = useForm({
		defaultValues: {
			title: "",
		},
		resolver: yupResolver(schema),
	});

	const handleSubmit = (value) => {
		console.log(value.value);

		if (!addTodo) return;
		addTodo(value);

		form.reset();
	};

	return (
		<form className="flex mt-4" onSubmit={form.handleSubmit(handleSubmit)}>
			<InputField name="title" label="Todo" form={form} />
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

// <form className="flex mt-4" onSubmit={handleSubmit}>
// 	<input
// 		className="shadow appearance-none rounded w-full py-2 px-3 mr-4 text-grey-darker"
// 		placeholder="Add Todo"
// 		value={value}
// 		onChange={(event) => {
// 			setValue(event.target.value);
// 		}}
// 	/>
// 	<button
// 		type="submit"
// 		className="flex-no-shrink py-2 px-4 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
// 	>
// 		Add
// 	</button>
// </form>
