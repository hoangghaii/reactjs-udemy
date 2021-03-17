import SideBar from "./components/sidebar/SideBar";
import Main from "./components/main/Main";
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
