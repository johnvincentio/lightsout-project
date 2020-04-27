
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';

const configureStore = (initialState = {}) => {
	const middleware = [thunk];
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;	// eslint-disable-line no-underscore-dangle
	const enhancers = composeEnhancers(
		applyMiddleware(...middleware)
	);
	const store = createStore(rootReducer, initialState, enhancers);
	return store;
};

export default configureStore;
