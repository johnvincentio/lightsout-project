
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../redux/actions';

import { userType } from '../types';

const UserHeader = ({ user }) => {
	if (!user) {
		return null
	}
	return (
		<div className="header">{user.name}</div>
		// <div>UserHeader, Id {this.props.userId} Name: {this.props.user.name}</div>
	)
}

UserHeader.defaultProps = {
	user: null
}

UserHeader.propTypes = {
	// userId: PropTypes.number.isRequired,
	user: userType,
	actions: PropTypes.shape({
		fetchUser: PropTypes.func.isRequired,
	}).isRequired,
};

// const mapStateToProps = state => ({
// 	users: state.postsReducer.users,
// });

const mapStateToProps = (state, ownProps) => {
	const user = state.userReducer.find(item => item.id === ownProps.userId);
	return {
		user
	}
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
