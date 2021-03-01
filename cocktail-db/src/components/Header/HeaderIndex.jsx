import React from "react";
import PropTypes from "prop-types";
import Hambuger from "./Hambuger/Hambuger";
import Search from "./Search/Search";

function HeaderIndex(props) {
	return (
		<div className="h-12 mt-8 flex items-center">
			<Hambuger />
			<h6 className="font-bold text-lg mx-10">CockTail-DB</h6>
			<Search />
		</div>
	);
}

HeaderIndex.propTypes = {};

export default HeaderIndex;
