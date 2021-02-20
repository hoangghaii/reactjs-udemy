import { useState, useEffect } from "react";
import axios from "axios";

export function useAxiosGet(url) {
	const [dataRes, setDataRes] = useState({
		loading: false,
		data: null,
		error: false,
	});

	useEffect(() => {
		setDataRes({
			loading: true,
			data: null,
			error: false,
		});

		axios
			.get(url)
			.then((response) => {
				setDataRes({
					loading: false,
					data: response.data,
					error: false,
				});
			})
			.catch((error) => {
				setDataRes({ loading: false, data: null, error: true });
				console.log(error);
			});
	}, [url]);

	return dataRes;
}
