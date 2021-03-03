import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Hambuger(props) {
	return <FontAwesomeIcon icon={faBars} style={{ cursor: "pointer" }} />;
}

Hambuger.propTypes = {};

export default Hambuger;
