import React, { useEffect, useState } from "react";
import { useAxiosGet } from "../../hooks/HttpRequests";
import Loading from "./../../components/Loading/Loading";
import SearchForm from "./../../components/SearchForm/SearchForm";
import { environment } from "./../../environment/environment";
import ProductList from "./components/ProductList/ProductList";

function Product() {
	const url = environment.BASE_URL;
	const dataRespond = useAxiosGet(url);

	let content = null;

	const [searchList, setSearchList] = useState([]);
	useEffect(() => {
		setSearchList(dataRespond.data);
	}, [dataRespond]);

	const getSearchList = (searchText) => {
		return dataRespond.data.filter(
			(item) =>
				item.name.toLowerCase().includes(searchText.toLowerCase()) ||
				item.description
					.toLowerCase()
					.includes(searchText.toLowerCase()) ||
				item.material
					.toLowerCase()
					.includes(searchText.toLowerCase()) ||
				item.price.toLowerCase().includes(searchText.toLowerCase())
		);
	};

	const handleSearch = (value) => {
		setSearchList(getSearchList(value));
	};

	if (dataRespond.loading) {
		content = <Loading />;
	}

	if (dataRespond.error) {
		content = <p>There was an error please refresh or try again later!</p>;
	}

	if (searchList) {
		content = (
			<div>
				<ProductList productList={searchList} />
			</div>
		);
	}

	return (
		<div>
			<div>
				<div className="">
					<div className="fixed top-12 right-0 z-2">
						<SearchForm handleSearch={handleSearch} />
					</div>
					<main className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
						<div>
							<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5 text-center">
								Product for you
							</h1>

							{content}
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default Product;
