import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import dataReducer from './data.reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	data: dataReducer
});

export default rootReducer;
