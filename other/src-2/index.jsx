//

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

console.log(`NODE_ENV ${process.env.NODE_ENV}`);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});
