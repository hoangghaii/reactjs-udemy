import Main from "./components/main/Main";
import SideBar from "./components/sidebar/SideBar";
import "./sass/main.scss";

function App() {
	return (
		<div className="container">
			<SideBar />

			<Main />
		</div>
	);
}

export default App;
