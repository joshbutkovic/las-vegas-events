import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Events from './components/Events/Events';
import Menu from './components/Layout/Menu/Menu';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Menu />
				<Events />
			</div>
		</Router>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
