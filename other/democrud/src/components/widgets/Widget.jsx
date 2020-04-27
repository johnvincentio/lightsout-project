import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

import { widgetType } from '../../types';

import * as actions from '../../redux/actions';

class Widget extends React.Component {
	formatter() {
		console.log('formmater; ', this.props.signedIn);
	}

	render() {
		// console.log('Widget::render, props ', this.props);
		const { widget, signedIn } = this.props;
		return (
			<div className="widget">
				{/* <Link to={`/widgets/${widget.id}`} className="header">
						{widget.name}
					</Link> */}
				<div className="widget-name">{widget.name}</div>
				<div className="widget-description">{widget.description}</div>

				<div className="widget-details">
					<div className="widget-row">
						<div className="price">Unit Price: ${widget.price}</div>
						<div className="sku">SKU: {widget.sku}</div>
					</div>
					<div className="widget-row">
						<div className="quantity">Quantity: {widget.quantity}</div>
						<div className="created">Manufactured: {widget.created}</div>
					</div>
				</div>

				{/* {signedIn && <div className="userid">Created By: {widget.userId}</div>} */}

				{signedIn && (
					<div className="widget-buttons">
						<Link to={`/widgets/edit/${widget.id}`} className="widget-edit-button">
							Update
						</Link>
						<Link to={`/widgets/delete/${widget.id}`} className="widget-delete-button">
							Delete
						</Link>
					</div>
				)}
			</div>
		);
	}
}

Widget.propTypes = {
	widget: widgetType.isRequired,
	signedIn: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	// console.log('Widget::mapStateToProps, state ', state);
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
)(Widget);
