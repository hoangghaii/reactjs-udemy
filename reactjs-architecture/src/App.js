import { useState } from "react";
import Main from "./components/main/Main";
import Mobile from "./components/mobile/Mobile";
import SideBar from "./components/sidebar/SideBar";
import "./sass/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App(props) {
	const [isAddClass, setAddClass] = useState(false);

	const addClass = () => {
		setAddClass(!isAddClass);
	};

	const onCloseMenu = () => {
		setAddClass(false);
	};

	return (
		<Router>
			<div className="container">
				<Mobile isAddClass={isAddClass} addClass={addClass} />

				<SideBar isAddClass={isAddClass} onCloseMenu={onCloseMenu} />

				<Main />
			</div>
		</Router>
	);
}

export default App;
