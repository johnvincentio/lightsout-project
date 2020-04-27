import { combineReducers } from 'redux';
// import { createResponsiveStateReducer } from 'redux-responsive';

import dataReducer from './data.reducer';

const rootReducer = combineReducers({
	data: dataReducer
});

export default rootReducer;
