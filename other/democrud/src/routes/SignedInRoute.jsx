import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const SignedInRoute = ({ signedIn, path, render, location }) => {
	// console.log('SignedInRoute, path ', path, ' signedIn ', signedIn, ' location ', location);
	if (signedIn) {
		return <Route path={path} render={render} />;
	}
	return (
		<Route
			path={path}
			render={() => <Redirect to={{ pathname: '/', state: { from: location } }} />}
		/>
	);
};

SignedInRoute.propTypes = {
	signedIn: PropTypes.bool.isRequired,
	render: PropTypes.func.isRequired,
	path: PropTypes.string.isRequired,
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
};

function mapStateToProps(state) {
	// console.log('SignedInRoute::mapStateToProps; state ', state);
	return {
		signedIn: state.auth.signedIn
	};
}

export default connect(mapStateToProps)(SignedInRoute);
