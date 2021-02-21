import React, { Fragment, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Loading from "./../../../components/Loading/Loading";
import NotFoundPage from "./../../../components/NotFoundPage/NotFoundPage";
import Pagination from "./../../../components/Pagination/Pagination";
import { environment } from "./../../../environment/environment";
import { useAxiosGet } from "./../../../hooks/HttpRequests";
import ProductList from "./../components/ProductList/ProductList";

function Product() {
	const url = environment.BASE_URL;
	const dataRespond = useAxiosGet(url);

	let content = null;

	/** ================= Pagination ================= */
	const [allRecord, setAllRecord] = useState([]);
	useEffect(() => {
		setAllRecord(dataRespond.data);
	}, [dataRespond.data]);
	const [currentRecord, setCurrentRecord] = useState([]);

	const onPageChanged = (data) => {
		const { currentPage, pageLimit } = data;

		const offset = (currentPage - 1) * pageLimit;
		const currentRecord = allRecord.slice(offset, offset + pageLimit);

		setCurrentRecord(currentRecord);
	};

	if (dataRespond.loading) {
		content = <Loading />;
	}

	if (dataRespond.error) {
		content = <Route component={NotFoundPage} />;
	}

	if (allRecord) {
		const totalRecords = allRecord.length;

		if (totalRecords === 0) return null;
		content = (
			<Fragment>
				<ProductList productList={currentRecord} />
				<Pagination
					totalRecords={totalRecords}
					pageLimit={9}
					pageNeighbours={1}
					onPageChanged={onPageChanged}
				/>
			</Fragment>
		);
	}

	return (
		<div>
			<div>
				<div className="">
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
