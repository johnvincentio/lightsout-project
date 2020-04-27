
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Root from './root/Root';

import configureStore from './store/configureStore';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Root />
		</Provider>,
		document.getElementById('root')
	);
});
