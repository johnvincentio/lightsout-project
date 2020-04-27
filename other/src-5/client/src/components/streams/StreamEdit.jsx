
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { fetchStream, editStream } from '../../redux/actions';

import StreamForm from './StreamForm';

import { matchType, streamType } from '../../types';

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = formValues => {
		// console.log('onSubmit, formValues ', formValues);
		this.props.editStream(this.props.match.params.id, formValues);
	};


	render() {
		console.log('StreamEdit, props ', this.props)
		if (!this.props.stream) {
			return <div>Loading...</div>
		}
		const { title, description } = this.props.stream;
		return (
			<div>
				<h3>Edit a Stream</h3>
				<StreamForm
					initialValues={{ title, description }}
					onSubmit={this.onSubmit}
				/>
			</div>
		)
	}
}

StreamEdit.propTypes = {
	match: matchType.isRequired,
	stream: streamType.isRequired,
	fetchStream: PropTypes.func.isRequired,
	editStream: PropTypes.func.isRequired,
	// isSignedIn: PropTypes.bool.isRequired,
	// currentUserId: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => (
	{ stream: state.streams[ownProps.match.params.id] }
	// currentUserId: state.auth.userId,
	// isSignedIn: state.auth.isSignedIn
);

export default connect(
	mapStateToProps,
	{ fetchStream, editStream }
)(StreamEdit);


