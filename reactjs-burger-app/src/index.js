import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

export const history = createBrowserHistory();
ReactDOM.render(
	<Router history={history}>
		<App />
	</Router>,
	document.getElementById("root")
);
registerServiceWorker();
