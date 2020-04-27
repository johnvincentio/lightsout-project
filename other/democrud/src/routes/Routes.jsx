//

import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import SignedInRoute from './SignedInRoute';

import Home from '../components/containers/Home';

import Test1 from '../components/test/Test1';

/*
<Route exact path="/" component={ListWidgets} />
<SignedInRoute path="/widgets/new" render={props => <CreateWidget {...props} />} />
<SignedInRoute path="/widgets/edit/:id" render={props => <EditWidget {...props} />} />
<SignedInRoute path="/widgets/delete/:id" render={props => <DeleteWidget {...props} />} />
<SignedInRoute path="/widgets/:id" render={props => <ListWidget {...props} />} />
<Route exact path="/test1" component={Test1} />
*/

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" render={props => <Home datatype="all" {...props} />} />
			<SignedInRoute path="/widgets/new" render={props => <Home datatype="create" {...props} />} />
			<SignedInRoute
				path="/widgets/edit/:id"
				render={props => <Home datatype="edit" {...props} />}
			/>
			<SignedInRoute
				path="/widgets/delete/:id"
				render={props => <Home datatype="delete" {...props} />}
			/>
			<SignedInRoute path="/widgets/:id" render={props => <Home datatype="select" {...props} />} />
			<Route exact path="/test1" component={Test1} />
			<Redirect to="/" />
		</Switch>
	</BrowserRouter>
);

export default Routes;
