import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { widgetsType } from '../../types';

import * as actions from '../../redux/actions';

import Widget from './Widget';

class ListWidgets extends React.Component {
	componentDidMount() {
		// console.log('--- ListWidgets::componentDidMount');
		this.props.actions.fetchWidgets();
	}

	renderList() {
		// console.log('ListWidgets::renderList, props ', this.props);
		return this.props.widgets.map(widget => (
			<div key={widget.id}>
				<Widget widget={widget} />
			</div>
		));
	}

	render() {
		// console.log('ListWidgets::render, props ', this.props);
		return <div id="list-widgets">{this.renderList()}</div>;
	}
}

ListWidgets.propTypes = {
	widgets: widgetsType.isRequired,
	actions: PropTypes.shape({
		fetchWidgets: PropTypes.func.isRequired
	}).isRequired
};

function mapStateToProps(state) {
	// console.log('ListWidgets::mapStateToProps, state ', state);
	return {
		widgets: Object.values(state.data),
		// userId: state.auth.userId,
		signedIn: state.auth.signedIn
	};
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListWidgets);
