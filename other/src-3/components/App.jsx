//

import React from 'react';

import youtube from '../api/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import './App.scss';

class App extends React.Component {

	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onSearchSubmit('');
	}

	onSearchSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: { q: term }
		});
		console.log('response ', response);
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = (video) => {
		console.log('App::onVideoSelect; video ', video);
		this.setState({ selectedVideo: video });
	}

	render() {
		return (
			<div className="ui container app-container">
				<SearchBar onSubmit={this.onSearchSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
