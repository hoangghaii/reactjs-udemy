import PropTypes from "prop-types";

function Aux(props) {
	const { children } = props;
	return children;
}

Aux.propTypes = {
	children: PropTypes.any,
};

Aux.defaultProps = {
	children: null,
};

export default Aux;
