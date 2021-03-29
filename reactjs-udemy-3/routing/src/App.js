import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Blog from "./containers/Blog/Blog";

function App() {
	return (
		<Router>
			<div className="App">
				<Blog />
			</div>
		</Router>
	);
}

export default App;
