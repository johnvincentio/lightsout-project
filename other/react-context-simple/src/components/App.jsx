
import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

import UserCreate from './UserCreate';

class App extends React.Component {
	state = { language: null };

	onLanguageChange = language => {
		this.setState({ language });
	}

	render() {
		return (
			<div className="ui container">
				<div>Select a language:
					<i className="flag us" onClick={() => this.onLanguageChange('english')} />
					<i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
				</div>
				<ColorContext.Provider value="primary">
					<LanguageContext.Provider value={this.state.language} >
						<UserCreate />
					</LanguageContext.Provider>
				</ColorContext.Provider>
			</div>
		);
	}
}

export default App;
