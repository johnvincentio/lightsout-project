//

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import App from './components/App';
import DevTools from './root/DevTools';

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
