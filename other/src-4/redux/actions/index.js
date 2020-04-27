
import { HANDLE_POSTS, HANDLE_USER, HANDLE_USERS } from '../constants';

import jsonPlaceHolder from '../../api/jsonPlaceHolder';

/*
* Handle users
*/

export const handleUser = (users) => ({
	type: HANDLE_USER,
	payload: users
});

export const handleUsers = (users) => ({
	type: HANDLE_USERS,
	payload: users
});

export const fetchUser = (userId) => async dispatch => {
	const response = await jsonPlaceHolder.get('/users', {
		params: { id: userId }
	});
	dispatch(handleUser(response.data));
};

export const fetchUsers = () => async dispatch => {
	const response = await jsonPlaceHolder.get('/users');
	dispatch(handleUsers(response.data));
};

/*
* Handle posts
*/

export const handlePosts = (posts) => ({
	type: HANDLE_POSTS,
	payload: posts
});

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceHolder.get('/posts');
	dispatch(handlePosts(response.data));
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

	const userList = [];
	getState().postsReducer.posts.forEach(post => {
		if (userList.findIndex(user => user === post.userId) === -1) {
			userList.push(post.userId);
		}
	})
	userList.forEach(user => {
		dispatch(fetchUser(user));
	})
};

// export const fetchPostsGOOD1 = () => {
// 	return async function (dispatch, getState) {
// 		const response = await jsonPlaceHolder.get('/posts');
// 		dispatch(handlePosts(response.data));
// 	};
// };

// export const fetchPostsGOOD2 = () => {
// 	return async (dispatch) => {
// 		const response = await jsonPlaceHolder.get('/posts');
// 		dispatch(handlePosts(response.data));
// 	};
// };

// export const fetchPostsGOOD3 = () => async dispatch => {
// 	const response = await jsonPlaceHolder.get('/posts');
// 	dispatch(handlePosts(response.data));
// };

