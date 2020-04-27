
import { combineReducers } from 'redux';

import postsReducer from './posts.reducer';
import usersReducer from './users.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
	postsReducer,
	usersReducer,
	userReducer
});

export default rootReducer;
