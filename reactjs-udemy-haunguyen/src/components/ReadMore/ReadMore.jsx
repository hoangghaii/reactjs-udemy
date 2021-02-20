import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

function ReadMore(props) {
	const { readMoreText } = props;
	const [readMore, setReadMore] = useState(false);

	const handleReadMore = () => {
		setReadMore(!readMore);
	};

	let readMoreClass = readMore ? "" : "read-more";

	let readMoreContext = readMore ? (
		<span>
			<i className="mdi mdi-arrow-left" /> <span> LESS</span>
		</span>
	) : (
		<span>
			<span>MORE </span>
			<i className="mdi mdi-arrow-right" />{" "}
		</span>
	);

	return (
		<Fragment>
			<span className={readMoreClass}>{readMoreText}</span>
			<a
				href="#0"
				className="opacity-50 text-gray-900 hover:opacity-100 hover:text-bold inline-block text-xs leading-none border-b border-gray-900"
				onClick={handleReadMore}
			>
				{readMoreContext}
			</a>
		</Fragment>
	);
}

ReadMore.propTypes = {
	readMoreText: PropTypes.string,
};

ReadMore.defaultProps = {
	readMoreText: "",
};

export default ReadMore;
