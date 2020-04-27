
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DevTools from './DevTools';

import App from '../components/App';
import NotFoundPage from '../components/NotFoundPage';

import './Devtools.scss';

const PageOne = () => (<div>PageOne</div>);
const PageTwo = () => (
	<div>PageTwo</div>
);

const Root = () => (
	<div>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/one" component={PageOne} />
				<Route exact path="/two" component={PageTwo} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>

		<div className="devtools">
			<DevTools />
		</div>
	</div>
);

export default Root;
