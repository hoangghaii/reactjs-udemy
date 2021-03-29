import PropTypes from "prop-types";
import React from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.css";

function Modal(props) {
	const { children, show, modalClosed } = props;

	return (
		<Aux>
			<Backdrop show={show} clicked={modalClosed} />

			<div
				className={classes.Modal}
				style={{
					transform: show ? "translateY(0)" : "translateY(-100vh)",
					opacity: show ? "1" : "0",
				}}
			>
				{children}
			</div>
		</Aux>
	);
}

Modal.propTypes = {
	children: PropTypes.any,
	show: PropTypes.any,
	modalClosed: PropTypes.func,
};

export default Modal;
