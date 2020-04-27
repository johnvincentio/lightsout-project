//

import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { matchType, widgetType } from '../../types';

import * as actions from '../../redux/actions';

class SelectWidget extends React.Component {
	componentDidMount() {
		this.props.actions.fetchWidget(this.props.match.params.id);
	}

	render() {
		if (!this.props.widget) {
			return <div>Loading...</div>;
		}
		const { name, description } = this.props.widget;
		return (
			<div>
				<h1>{name}</h1>
				<h5>{description}</h5>
			</div>
		);
	}
}

SelectWidget.propTypes = {
	widget: widgetType.isRequired,
	match: matchType.isRequired,
	actions: PropTypes.shape({
		fetchWidget: PropTypes.func.isRequired
	}).isRequired
};

// const mapStateToProps = (state, ownProps) => ({ widget: state.data[ownProps.match.params.id] });

function mapStateToProps(state, ownProps) {
	console.log('SelectWidget::mapStateToProps, state ', state, ' ownProps ', ownProps);
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
)(SelectWidget);
