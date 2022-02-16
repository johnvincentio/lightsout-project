//

/* global describe, it */

import React from 'react';

import { render } from '@testing-library/react';

import App from '../../src/components/App';

describe('<App />', () => {
	describe('smoke-test', () => {
		it('Renders without crashing', () => {
			render(<App />);
		});
	});
});
