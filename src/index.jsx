
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './assets/fonts/neon.ttf';

import { register } from './serviceWorker';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

register();
