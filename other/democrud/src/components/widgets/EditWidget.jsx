import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormWidget from './FormWidget';

import { matchType, widgetType } from '../../types';

import * as actions from '../../redux/actions';

class EditWidget extends React.Component {
	componentDidMount() {
		this.props.actions.fetchWidget(this.props.match.params.id);
	}

	onSubmit = formValues => {
		// console.log('onSubmit, formValues ', formValues);
		this.props.actions.editWidget(this.props.match.params.id, formValues);
	};

	render() {
		// console.log('EditWidget, props ', this.props);
		if (!this.props.widget) {
			return <div>Loading...</div>;
		}
		return (
			<div className="outer-container">
				<div className="edit-widget">
					<h3>Edit a Widget</h3>
					<FormWidget widget={this.props.widget} onSubmit={this.onSubmit} />
				</div>
			</div>
		);
	}
}

EditWidget.propTypes = {
	widget: widgetType.isRequired,
	match: matchType.isRequired,
	actions: PropTypes.shape({
		fetchWidget: PropTypes.func.isRequired,
		editWidget: PropTypes.func.isRequired
	}).isRequired
};

function mapStateToProps(state, ownProps) {
	// console.log('EditWidget::mapStateToProps, state ', state, ' ownProps ', ownProps);
	return {
		widget: state.data[ownProps.match.params.id]
	};
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditWidget);
