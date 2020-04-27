//

import React from 'react';

import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

import './App.scss';

class App extends React.Component {

	state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await unsplash.get('search/photos', {
			params: { query: term }
		});
		// console.log('response ', response.data.results);
		this.setState({ images: response.data.results })
	};

	render() {
		return (
			<div className="ui container app-container">
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found: {this.state.images.length} images
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
