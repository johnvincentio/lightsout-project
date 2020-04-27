
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth.reducer';
import streamReducer from './stream.reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	form: formReducer,
	streams: streamReducer,
});

export default rootReducer;
