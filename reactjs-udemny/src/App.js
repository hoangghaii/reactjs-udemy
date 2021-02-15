import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import CounterExample from "./components/CounterExample/CounterExample";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Product from "./views/Product/Product";

function App() {
	return (
		<div className="relative pb-10 min-h-screen">
			<Router>
				<Header />

				{/* <CounterExample /> */}

				<div className="p-3">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/product/:id">
							<Product />
						</Route>
					</Switch>
				</div>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
