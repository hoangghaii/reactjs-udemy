import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Hambuger(props) {
	return <FontAwesomeIcon icon={faBars} style={{ cursor: "pointer" }} />;
}

Hambuger.propTypes = {};

export default Hambuger;
