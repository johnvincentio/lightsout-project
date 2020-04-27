
import { HANDLE_POSTS } from '../constants';

export default (state = [], action) => {
	switch (action.type) {
		case HANDLE_POSTS:
			return { ...state, posts: action.payload };
		// return { ...state, posts: action.payload.filter(post => post.id < 2) };
		default:
			return state;
	}
};
