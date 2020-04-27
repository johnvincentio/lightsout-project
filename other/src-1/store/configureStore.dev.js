//

import { createStore, applyMiddleware, compose } from 'redux';
// import { responsiveStoreEnhancer } from 'redux-responsive';
import { persistState } from 'redux-devtools';

import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';
import DevTools from '../root/DevTools';

const configureStore = (initialState = {}) => {
	const middleware = [thunk];
	const enhancers = compose(
		// responsiveStoreEnhancer,
		applyMiddleware(...middleware),
		DevTools.instrument(),
		persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/))
	);
	const store = createStore(rootReducer, initialState, enhancers);
	return store;
};

export default configureStore;

/*

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/';

const configureStore = (initialState = {}) => {
	const middleware = [thunk];
	const enhancers = [];
	const store = createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(...middleware), ...enhancers),
	);
	return store;
};

export default configureStore;
*/
