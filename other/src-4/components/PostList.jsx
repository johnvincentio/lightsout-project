
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../redux/actions';

import UserHeader from './UserHeader';
import { postsType } from '../types';

class PostList extends React.Component {

	componentDidMount() {
		this.props.actions.fetchPostsAndUsers();
	}

	renderList() {
		return this.props.posts.map(post => (
			<div key={post.id} className="item">
				<i className="large middle aligned icon user" />
				<div className="content">
					<div className="description">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
					<UserHeader userId={post.userId} />
				</div>
			</div>
		));
	}

	render() {
		return (
			<div className="ui container">
				<div className="ui relaxed divided list">
					{this.renderList()}
				</div>
			</div>
		);
	}
}

PostList.defaultProps = {
	posts: []
}

PostList.propTypes = {
	posts: postsType,
	actions: PropTypes.shape({
		fetchPostsAndUsers: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = state => ({
	posts: state.postsReducer.posts,
});

// const mapStateToProps = state => {
// 	console.log('state ', state);
// 	return {
// 		posts: state.postsReducer.posts
// 	}
// };

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
