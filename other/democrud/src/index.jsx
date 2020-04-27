//

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes/Routes';

import { register } from './serviceWorker';

import configureStore from './store/configureStore';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Routes />
		</Provider>,
		document.getElementById('root')
	);
});

register();
