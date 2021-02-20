import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Loading from "./../../../../components/Loading/Loading";
import ReadMore from "./../../../../components/ReadMore/ReadMore";
import { environment } from "./../../../../environment/environment";
import { useAxiosGet } from "./../../../../hooks/HttpRequests";
import "./ProductCard.scss";

function ProductCard(props) {
	const id = useParams();
	const url = `${environment.BASE_URL}/${id.id}`;
	const dataRes = useAxiosGet(url);

	let contentRendered = null;

	if (dataRes.error) {
		contentRendered = (
			<p>There was an error please refresh or try again later!</p>
		);
	}

	if (dataRes.loading) {
		contentRendered = <Loading />;
	}

	if (dataRes.data) {
		const productDetail = dataRes.data;
		let exampleReadMoreText =
			productDetail.description +
			"Sunt commodo nisi sint ad eiusmod excepteur adipisicing et veniam. In consectetur cillum ipsum reprehenderit consectetur pariatur. Consectetur minim sit Lorem dolor.Culpa ad sint est aute nulla labore esse ad aute fugiat commodo. Commodo tempor aliquip labore excepteur commodo duis esse ex velit non. Adipisicing consequat aliqua esse in sint ipsum non veniam nostrud nulla officia velit. Id pariatur amet laboris ullamco aliquip fugiat.";

		contentRendered = (
			<div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
				<div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
					<div className="md:flex items-center -mx-10">
						<div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
							<div className="relative">
								<img
									src={productDetail.images[0].imageUrl}
									className="w-full relative z-10"
									alt=""
								/>
								<div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
							</div>
						</div>
						<div className="w-full md:w-1/2 px-10">
							<div className="mb-10">
								<h1 className="font-bold uppercase text-2xl mb-5">
									{productDetail.name} <br />
									{productDetail.material}
								</h1>

								<ReadMore readMoreText={exampleReadMoreText} />
							</div>
							<div>
								<div className="inline-block align-bottom mr-5">
									<span className="text-2xl leading-none align-baseline">
										$
									</span>
									<span className="font-bold text-5xl leading-none align-baseline">
										{productDetail.price.slice(0, -2)}
									</span>
									<span className="text-2xl leading-none align-baseline">
										{productDetail.price.slice(-2)}
									</span>
								</div>
								<div className="inline-block align-bottom">
									<button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
										<i className="mdi mdi-cart -ml-2 mr-2"></i>{" "}
										BUY NOW
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return <Fragment>{contentRendered}</Fragment>;
}

ProductCard.propTypes = {};

export default ProductCard;
