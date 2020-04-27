import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from '../tools/Modal';

import { matchType, widgetType } from '../../types';

import * as actions from '../../redux/actions';

class DeleteWidget extends React.Component {
	componentDidMount() {
		this.props.actions.fetchWidget(this.props.match.params.id);
	}

	handleDelete = (e, id) => {
		this.props.actions.deleteWidget(id);
		this.props.history.push('/');
	};

	renderActions() {
		const { id } = this.props.match.params;
		return (
			<Fragment>
				<button
					type="button"
					onClick={e => this.handleDelete(e, id)}
					className="ui negative button"
				>
					Delete
				</button>
				<Link to="/" className="ui cancel button">
					Cancel
				</Link>
			</Fragment>
		);
	}

	renderContent() {
		if (!this.props.widget) {
			return `Are you sure you want to delete this widget?`;
		}
		return `Are you sure you want to delete the widget: ${this.props.widget.name}`;
	}

	render() {
		console.log('DeleteWidget; props ', this.props);
		return (
			<Modal
				title="Delete Widget"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => this.props.history.push('/')}
			/>
		);
	}
}

DeleteWidget.propTypes = {
	widget: widgetType,
	match: matchType.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	actions: PropTypes.shape({
		fetchWidget: PropTypes.func.isRequired,
		deleteWidget: PropTypes.func.isRequired
	}).isRequired
};

DeleteWidget.defaultProps = {
	widget: null
};

const mapStateToProps = (state, ownProps) => {
	console.log('mapStateToProps, state ', state, ' ownProps ', ownProps);
	return {
		widget: state.data[ownProps.match.params.id]
		// currentUserId: state.auth.userId,
		// isSignedIn: state.auth.isSignedIn
	};
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DeleteWidget);
