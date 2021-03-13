import PropTypes from "prop-types";

function Auxiliary(props) {
	const { children } = props;
	return children;
}

Auxiliary.propTypes = {
	children: PropTypes.any,
};

Auxiliary.defaultProps = {
	children: null,
};

export default Auxiliary;
