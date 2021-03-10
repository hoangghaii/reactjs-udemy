import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import cocktailApi from "./../../apis/cocktailApi";
import Hambuger from "./Hambuger/Hambuger";
import Search from "./Search/Search";
import SearchResult from "./Search/SearchResult/SearchResult";

function HeaderIndex(props) {
	const [dataRespond, setDataRespond] = useState("");

	const getDataBy = async (value) => {
		const params = { i: value };
		const dataRes = await cocktailApi.filterBy(params);

		if (dataRes) {
			setDataRespond(dataRes.data.drinks);
		}
	};

	const onSubmit = (value) => {
		if (value) {
			getDataBy(value);
		} else if (!value === true) {
			setDataRespond("");
		}
	};

	let content;

	if (dataRespond !== "" && dataRespond === "None Found") {
		toast.error(
			<div>
				<h4>Data not found!</h4>
				<span>Please enter the correct keywork</span>
			</div>
		);
	} else if (dataRespond !== "") {
		content = (
			<ul className="bg-white border border-gray-100 w-full mt-2 absolute right-0 z-50">
				{dataRespond.map((data, index) => (
					<SearchResult key={index} data={data} />
				))}
			</ul>
		);
	}

	return (
		<Fragment>
			<div className="h-12 mt-8 flex items-center">
				<Hambuger />

				<Link to="/">
					<h6 className="font-bold text-lg mx-10">CockTail-DB</h6>
				</Link>

				<Search onSubmit={onSubmit} />
			</div>

			{content}
		</Fragment>
	);
}

HeaderIndex.propTypes = {};

export default HeaderIndex;
