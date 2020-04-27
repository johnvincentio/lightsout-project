
import { combineReducers } from 'redux';

import songs from './songs.reducer';

const rootReducer = combineReducers({
	songs,
});

export default rootReducer;
