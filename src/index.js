import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// import App from './App';
import Routes from './Routes';

const routing = (
	<BrowserRouter>
		<Routes />
	</BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'));
