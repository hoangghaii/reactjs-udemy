import { useState } from "react";
import Main from "./components/main/Main";
import Mobile from "./components/mobile/Mobile";
import SideBar from "./components/sidebar/SideBar";
import "./sass/main.scss";

function App(props) {
	const [isAddClass, setAddClass] = useState(false);

	const addClass = () => {
		setAddClass(!isAddClass);
	};

	return (
		<div className="container">
			<Mobile isAddClass={isAddClass} addClass={addClass} />

			<SideBar isAddClass={isAddClass} />

			<Main />
		</div>
	);
}

export default App;
