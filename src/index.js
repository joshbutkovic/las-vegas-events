import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import RouterContainer from "./components/Layout/RouterContainer/RouterContainer";
import Menu from "./components/Layout/Menu/Menu";

import "./styles.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Menu />
				<RouterContainer />
			</div>
		</Router>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
