//

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { Router, RouteComponentProps } from '@reach/router';

import { StoreProvider } from './Store';

import HomePage from './HomePage';
import FavPage from './FavPage';

import App from './App';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
	<StoreProvider>
		<Router>
			<App path="/">
				<Route exact path="/favs" render={props => <FavPage />} />
				<Route exact path="/" render={props => <HomePage />} />
				{/* <RouterPage pageComponent={<HomePage />} path="/" /> */}
				{/* <RouterPage pageComponent={<FavPage />} path="/favs" /> */}
				<Redirect to="/" />
			</App>
		</Router>
	</StoreProvider>,
	document.getElementById('root')
);
