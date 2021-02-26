import { React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./auth/SignIn/SignIn";
import SignUp from "./auth/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import AlbumIndex from "./features/Albums/AlbumIndex";
import Counter from "./features/Counter/Counter";
import ProductIndex from "./features/Product/ProductIndex";
import TodoIndex from "./features/Todo/TodoIndex";
import WeatherIndex from "./features/Weather/WeatherIndex";

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
		<>
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
						<Route path="/weather" component={WeatherIndex} />
						<Route path="/counter" component={Counter} />
						<Route path="/signin" component={SignIn} />
						<Route path="/signup" component={SignUp} />

						<Route exact path="/" component={AlbumIndex} />

						<Route component={NotFoundPage} />
					</Switch>
					<Footer />
				</Router>
			</div>

			<ToastContainer
				limit={3}
				position="bottom-right"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover
			/>
		</>
	);
}

export default App;
