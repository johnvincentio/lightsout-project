
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import Modal from '../Modal';
import history from '../../history';

import { fetchStream, deleteStream } from '../../redux/actions';

import { matchType, streamType } from '../../types';

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions() {
		const { id } = this.props.match.params;
		return (
			<Fragment>
				<button
					type="button"
					onClick={() => this.props.deleteStream(id)}
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
		if (!this.props.stream) {
			return `Are you sure you want to delete this stream?`
		}
		return `Are you sure you want to delete the stream: ${this.props.stream.title}`
	}

	render() {
		console.log('StreamDelete; props ', this.props);
		return (
			<Modal
				title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

StreamDelete.propTypes = {
	match: matchType.isRequired,
	stream: streamType,
	fetchStream: PropTypes.func.isRequired,
	deleteStream: PropTypes.func.isRequired
};

StreamDelete.defaultProps = {
	stream: null
}

const mapStateToProps = (state, ownProps) => {
	console.log('mapStateToProps, state ', state, ' ownProps ', ownProps);
	return {
		stream: state.streams[ownProps.match.params.id]
		// currentUserId: state.auth.userId,
		// isSignedIn: state.auth.isSignedIn
	};
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
