import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./common/global";
import { darkTheme, lightTheme } from "./common/theme";
import Loading from "./components/loading/Loading";
import Main from "./components/main/Main";
import Mobile from "./components/mobile/Mobile";
import SideBar from "./components/sidebar/SideBar";
import { useDarkMode } from "./hook/useDarkMode";
import "./sass/main.scss";

function App(props) {
	const [isAddClass, setAddClass] = useState(false);
	const [isShowing, setShowing] = useState(true);

	const [theme, toggleTheme, componentMounted] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	const addClass = () => {
		setAddClass(!isAddClass);
	};

	const onCloseMenu = () => {
		setAddClass(false);
	};

	useEffect(() => {
		setInterval(() => {
			setShowing(false);
		}, 5000);
	}, []);

	if (!componentMounted) {
		return <div />;
	}

	return (
		<>
			{isShowing === false ? (
				<Router>
					<ThemeProvider theme={themeMode}>
						<GlobalStyles />

						<div className="container">
							<Mobile
								isAddClass={isAddClass}
								addClass={addClass}
							/>

							<SideBar
								isAddClass={isAddClass}
								onCloseMenu={onCloseMenu}
								onToggleTheme={toggleTheme}
								theme={theme}
							/>

							<Main />
						</div>
					</ThemeProvider>
				</Router>
			) : (
				<Loading isShow={isShowing} />
			)}
		</>
	);
}

export default App;
