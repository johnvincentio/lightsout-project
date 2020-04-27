
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../redux/actions';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_APP_ID;

/*
gapi.auth2.getAuthInstance().signOut();
gapi.auth2.getAuthInstance().signIn();

current user
gapi.auth2.getAuthInstance().currentUser.get().getId()
*/

class GoogleAuthentication extends React.Component {

	componentDidMount() {
		window.app.gapiPromise.then(() => {
			window.gapi.load('client:auth2', () => {
				window.gapi.client.init({
					client_id: GOOGLE_CLIENT_ID,
					scope: 'email'
				}).then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
			});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.actions.signIn(this.auth.currentUser.get().getId());
		}
		else {
			this.props.actions.signOut();
		}
	}

	onSignInClick = () => {
		this.auth.signIn();
	}

	onSignOutClick = () => {
		this.auth.signOut();
	}

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null
		}
		if (this.props.isSignedIn) {
			return (
				<button type="button" onClick={this.onSignOutClick} className="ui red google button">
					<i className="google icon" />
					Sign Out
				</button>
			);
		}
		return (
			<button type="button" onClick={this.onSignInClick} className="ui red google button">
				<i className="google icon" />
				Sign In with Google
			</button>
		)
	}

	render() {
		return (
			<div>{this.renderAuthButton()}</div>
		)
	}
}

GoogleAuthentication.propTypes = {
	isSignedIn: PropTypes.bool,
	actions: PropTypes.shape({
		signIn: PropTypes.func.isRequired,
		signOut: PropTypes.func.isRequired
	}).isRequired,
};

GoogleAuthentication.defaultProps = {
	isSignedIn: null
};

const mapStateToProps = state => {
	// console.log('state ', state);
	return { isSignedIn: state.auth.isSignedIn };
};

// const mapStateToProps = state => ({
// 	auth: state.auth.auth,
// });

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuthentication);

// setGoogleStatus = () => {
// 	// console.log('LoginGoogle::setGoogleStatus()');
// 	const auth2 = window.gapi.auth2.getAuthInstance();
// 	const signedin = auth2.isSignedIn.get();
// 	// console.log('LoginGoogle::setGoogleStatus(); signedin ', signedin);
// 	this.setState({ isSignedIn: signedin, ready: true });
// 	auth2.isSignedIn.listen(this.onAuthChange);
// };
