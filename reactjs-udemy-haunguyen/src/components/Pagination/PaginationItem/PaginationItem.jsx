import React from "react";
import PropTypes from "prop-types";

function PaginationItem(props) {
	const {
		pageText,
		pageNumber,
		onClick,
		isActive,
		isDisabled,
		activeClass,
		activeLinkClass,
		itemClass,
		linkClass,
		disabledClass,
		href,
		ariaLabel,
	} = props;

	const handleClick = (e) => {
		e.preventDefault();

		if (isDisabled) {
			return;
		}

		onClick(pageNumber);
	};

	let css =
		"w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full";

	if (isActive) {
		css = css + " " + activeClass;
	} else if (isDisabled) {
		css = css + " " + disabledClass;
	}

	// const linkCss = cx(linkClass, {
	// 	[activeLinkClass]: isActive,
	// });

	return (
		<div className={css} onClick={handleClick}>
			<a href={href} aria-label={ariaLabel}>
				{pageText}
			</a>
		</div>
	);
}

PaginationItem.propTypes = {
	pageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	pageNumber: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
	isActive: PropTypes.bool.isRequired,
	isDisabled: PropTypes.bool,
	activeClass: PropTypes.string,
	activeLinkClass: PropTypes.string,
	itemClass: PropTypes.string,
	linkClass: PropTypes.string,
	disabledClass: PropTypes.string,
	href: PropTypes.string,
	ariaLabel: PropTypes.string,
};

PaginationItem.defaultProps = {
	activeClass: "bg-pink-600 text-white",
	disabledClass: "disabled",
	itemClass: undefined,
	linkClass: undefined,
	activeLinkCLass: undefined,
	isActive: false,
	isDisabled: false,
	href: "#",
	ariaLabel: "",
};

export default PaginationItem;
