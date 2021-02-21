import { React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AlbumIndex from "./features/Albums/AlbumIndex";
import ProductIndex from "./features/Product/ProductIndex";
import TodoIndex from "./features/Todo/TodoIndex";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
	// const name = "Hai";
	// const age = 18;
	// const isMale = true;
	// const student = {
	// 	name: "Easy FrontEnd",
	// };
	// const colorList = ["red", "green", "blue"];
	// let color = useRandomColor();
	// let time = useClock();

	return (
		<div className="">
			<Router>
				{/* <header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<p>
						Xin chao {name}-{age}-{isMale ? "Male" : "Female"}
					</p>
	
					{isMale ? <p>Male</p> : <p>Female</p>}
	
					{isMale && (
						<>
							<p>Male 1</p>
							<p>Male 2</p>
							<p>Male 3</p>
						</>
					)}
	
					<ul>
						{colorList.map((color, index) => (
							<li key={index}>{color}</li>
						))}
					</ul>
	
					<p>{student.name}</p>
				</header> */}
				<Header />
				<Switch>
					<Route path="/todo" component={TodoIndex} />
					<Route path="/product" component={ProductIndex} />
					<Route path="/album" component={AlbumIndex} />
					<Route exact path="/" component={AlbumIndex} />

					<Route component={NotFoundPage} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
