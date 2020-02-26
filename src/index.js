import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage } from './Components/homepage';
import { AppLayout } from './Components/App.layout';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { ErrorPage } from './Components/404';

import './index.css';


const App = () => {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<ProtectedRoute exact path="/app" component={AppLayout} />
					<Route path="*" component={ErrorPage} />
				</Switch>
			</div>
		);
	}


const rootElem = document.getElementById('root');
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	rootElem
);
