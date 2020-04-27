//

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DevTools from './root/DevTools';

import App from './components/App';

import configureStore from './store/configureStore';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
			<div className="devtools">
				<DevTools />
			</div>
		</Provider>,
		document.getElementById('root')
	);
});
