
import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
	renderSubmit(language) {		// eslint-disable-line class-methods-use-this
		return language === 'english' ? 'Submit' : 'Voorleggen';
	}

	renderButton(color) {
		return (
			<button type="submit" className={`ui ${color} button`}>
				<LanguageContext.Consumer>
					{({ language }) => this.renderSubmit(language)}
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
