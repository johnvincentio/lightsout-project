
import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';

import { StreamCreate, StreamDelete, StreamEdit, StreamList, StreamShow } from '../components/streams';

import Header from '../components/Header';
import history from '../history';

const Root = () => (
	<div className="ui container">
		<Router history={history}>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={StreamList} />
					<Route exact path="/streams/new" render={props => <StreamCreate {...props} />} />
					<Route exact path="/streams/edit/:id" component={StreamEdit} />
					<Route exact path="/streams/delete/:id" component={StreamDelete} />
					<Route exact path="/streams/:id" component={StreamShow} />
				</Switch>
			</div>
		</Router>
	</div>
);

export default Root;
