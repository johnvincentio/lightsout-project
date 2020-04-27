
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../redux/actions';

import { usersType } from '../types';

class UserList extends React.Component {

	componentDidMount() {
		this.props.actions.fetchUsers();
	}

	renderList() {
		return this.props.users.map(user => (
			<div key={user.id} className="item">
				<i className="icon user" />
				<div className="content">
					<div className="header">ID: {user.id}</div>
					<div className="description">Name: {user.name}</div>
				</div>
			</div>
		));
	}

	render() {
		return (
			<div className="ui container">
				<div className="ui divided list">
					{this.renderList()}
				</div>
			</div>
		);
	}
}

UserList.defaultProps = {
	users: []
}

UserList.propTypes = {
	users: usersType,
	actions: PropTypes.shape({
		fetchUsers: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = state => ({
	users: state.usersReducer.users
});

// const mapStateToProps = state => {
// 	console.log('Userlist::state ', state);
// 	return {
// 		users: state.usersReducer.users
// 	}
// };

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
