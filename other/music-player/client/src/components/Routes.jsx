//

import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './containers/Layout';

import App from './App';

const FoldersPage = props => {
	return (
		<Layout>
			<App folderId={0} trackId={null} {...props} />
		</Layout>
	);
};

const PlayTrackPage = props => {
	// console.log('PlayTrackPage; props ', props);
	const folderId = parseInt(props.match.params.id1, 10);
	const trackId = parseInt(props.match.params.id2, 10);
	// console.log('folderId ', folderId, ' trackId ', trackId);
	return (
		<Layout>
			<App folderId={folderId} trackId={trackId} {...props} />
		</Layout>
	);
};
PlayTrackPage.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id1: PropTypes.string.isRequired,
			id2: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

const PlayFolderPage = props => {
	// console.log('PlayFolderPage; props ', props);
	const folderId = parseInt(props.match.params.id1, 10);
	const trackId = null;
	// console.log('folderId ', folderId, ' trackId ', trackId);
	return (
		<Layout>
			<App folderId={folderId} trackId={trackId} {...props} />
		</Layout>
	);
};
PlayFolderPage.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id1: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" render={props => <FoldersPage {...props} />} />
			<Route
				exact
				path="/play/:id1/:id2"
				render={props => <PlayTrackPage {...props} />}
			/>

			<Route
				exact
				path="/play/:id1/"
				render={props => <PlayFolderPage {...props} />}
			/>

			{/* <Route exact path="/test1" component={Test1} /> */}
			<Redirect to="/" />
		</Switch>
	</BrowserRouter>
);

export default Routes;
