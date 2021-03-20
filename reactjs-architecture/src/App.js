import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from "./components/loading/Loading";
import Main from "./components/main/Main";
import Mobile from "./components/mobile/Mobile";
import SideBar from "./components/sidebar/SideBar";
import "./sass/main.scss";

function App(props) {
	const [isAddClass, setAddClass] = useState(false);
	const [isShowing, setShowing] = useState(false);

	const addClass = () => {
		setAddClass(!isAddClass);
	};

	const onCloseMenu = () => {
		setAddClass(false);
	};

	useEffect(() => {
		setShowing(true);

		const intervalShow = setInterval(() => {
			setShowing(false);
		}, 5000);

		return () => {
			intervalShow();
		};
	}, []);

	return (
		<Router>
			<div className="container">
				<Mobile isAddClass={isAddClass} addClass={addClass} />

				<SideBar isAddClass={isAddClass} onCloseMenu={onCloseMenu} />

				<Main />
			</div>

			<Loading isShow={isShowing} />
		</Router>
	);
}

export default App;
