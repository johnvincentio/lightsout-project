
import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
	renderSubmit(value) {		// eslint-disable-line class-methods-use-this
		return value === 'english' ? 'Submit' : 'Voorleggen';
	}

	renderButton(color) {
		return (
			<button type="submit" className={`ui ${color} button`}>
				<LanguageContext.Consumer>
					{value => this.renderSubmit(value)}
				</LanguageContext.Consumer>
			</button>
		)
	}

	render() {
		return (
			<ColorContext.Consumer>
				{(color) => this.renderButton(color)}
			</ColorContext.Consumer>
		);
	}
}

export default Button;
