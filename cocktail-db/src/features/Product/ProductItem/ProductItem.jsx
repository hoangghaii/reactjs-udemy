import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductItem(props) {
	const { data } = props;

	return (
		<Link to={`/product/${data.strDrink}`}>
			<div className="flex flex-col">
				<div className="shadow-lg relative h-60  custom-rounded">
					<div
						className="absolute bottom-0 left-0 bg-gray-200 rounded-tr-lg p-2 text-center text-xs w-full h-full"
						style={{
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundImage: `url(${data.strDrinkThumb})`,
						}}
					>
						<span className="font-medium absolute bottom-2 left-2 text-white">
							<b>idDrink: </b> {data.idDrink}
						</span>
					</div>
				</div>
				<p className="mt-4 font-medium">{data.strDrink}</p>
			</div>
		</Link>
	);
}

ProductItem.propTypes = {
	data: PropTypes.object,
};

ProductItem.defaultProps = {
	data: null,
};

export default ProductItem;
