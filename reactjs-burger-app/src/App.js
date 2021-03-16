import { createBrowserHistory } from "history";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccessForbidden from "./components/Error/403Page/403Page";
import NotFound from "./components/Error/404Page/NotFound";
import TimeOut from "./components/Error/408Page/TimeOut";
import InternalError from "./components/Error/500Page/InternalError";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

export const history = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Fragment>
				{/* <Router history={history}>
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<Layout>
									<BurgerBuilder />
								</Layout>
							)}
						/>

						<Route
							exact
							path="/access-forbidden"
							component={AccessForbidden}
						/>

						<Route exact path="/not-found" component={NotFound} />

						<Route exact path="/time-out" component={TimeOut} />

						<Route
							exact
							path="/internal-error"
							component={InternalError}
						/>

						<Route component={NotFound} />
					</Switch>
				</Router> */}

				<Layout>
					<BurgerBuilder />
				</Layout>

				<ToastContainer
					limit={3}
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</Fragment>
		);
	}
}

export default App;
