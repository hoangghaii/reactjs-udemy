import React, { useEffect, useState } from "react";
import productApi from "./../../../apis/productApi";

function Search(props) {
	const [searchvalue, setSearchValue] = useState("");
	const [products, setProducts] = useState([]);
	const [constProducts, setConstProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const dataRes = await productApi.getAll();
			setConstProducts(dataRes.data);
		})();
	}, []);

	const getSearchList = (dataList, searchText) => {
		const dataKeys = dataList[0] && Object.keys(dataList[0]);
		return dataList.filter((item) =>
			dataKeys.some(
				(dataKey) =>
					item[dataKey]
						.toString()
						.toLowerCase()
						.indexOf(searchText.toLowerCase()) > -1
			)
		);
	};

	const handleChange = (event) => {
		event.preventDefault();

		setProducts(getSearchList(constProducts, searchvalue));
	};

	return (
		<div className="w-96 max-w-screen-xl mx-auto">
			<div className="flex justify-center">
				<div className="relative w-full max-w-md">
					<form
						className="flex items-center bg-gray-200 rounded-md"
						onChange={handleChange}
					>
						<div className="pl-2">
							<svg
								className="fill-current text-gray-500 w-6 h-6"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									className="heroicon-ui"
									d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
								/>
							</svg>
						</div>
						<input
							className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
							id="search"
							type="text"
							placeholder="Search product"
							value={searchvalue}
							onChange={(event) => {
								setSearchValue(event.target.value);
							}}
						/>
					</form>

					{searchvalue !== "" && products.length > 0 && (
						<div className="bg-white w-full absolute left-0 text-center mx-auto py-3 text-sm">
							{products.map((product, index) => (
								<div
									key={index}
									className="flex justify-evenly items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-4 py-2 my-2"
								>
									<div className="p-2">
										<img
											src={product.images[0].imageUrl}
											alt="My profile"
											className="w-9 h-7 rounded order-1"
										/>
									</div>
									<div className="flex-grow font-medium px-2">
										{product.name}
									</div>
									<div className="text-sm font-normal text-gray-500 tracking-wide">
										{product.price}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

Search.propTypes = {};

export default Search;
