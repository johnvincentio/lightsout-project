//

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

import * as actions from '../../redux/actions';

const Create = props => {
	// console.log('Create::render, props ', props);
	if (props.signedIn) {
		return (
			<div id="create">
				<Link to="/widgets/new" className="create-button">
					Create Widget
				</Link>
			</div>
		);
	}
	return null;
};

Create.propTypes = {
	signedIn: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	// console.log('Create::mapStateToProps, state ', state);
	return {
		signedIn: state.auth.signedIn
	};
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Create);
