//

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormWidget from './FormWidget';

import * as actions from '../../redux/actions';

class CreateWidget extends React.Component {
	onSubmit = formValues => {
		this.props.actions.createWidget(formValues);
	};

	render() {
		return (
			<div className="create-widget">
				<h3>Create a Widget</h3>
				<FormWidget onSubmit={this.onSubmit} />
			</div>
		);
	}
}

CreateWidget.propTypes = {
	actions: PropTypes.shape({
		createWidget: PropTypes.func.isRequired
	}).isRequired
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(
	null,
	mapDispatchToProps
)(CreateWidget);
