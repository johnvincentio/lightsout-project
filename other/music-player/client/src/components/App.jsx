//

import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';

import PlayerBreadCrumbs from './PlayerBreadCrumbs';
import ShowFolders from './ShowFolders';
import ShowTracks from './ShowTracks';

import PlayerTrackInfo from './PlayerTrackInfo';
import PlayerControls from './PlayerControls';

import MuiSlider from './MuiSlider';

import {
	AllStyles,
	Container,
	InnerContainer,
	Header,
	Columns,
	Rows
} from './AllStyles';

import { isPlayerReady, previousTrack, nextTrack } from '../utilities/utils';

import { NOT_APP_15_SEC_RULE, SERVER_GET_TRACK } from '../config';

import * as actions from '../redux/actions';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			folderId: props.folderId,
			trackId: props.trackId,
			playing: false,
			duration: null,
			currentTime: null
		};
	}

	componentDidMount() {
		// console.log('--- App::componentDidMount');
		this.props.actions.fetchMusicData();
		this.audioElement.addEventListener('loadedmetadata', this.loadedMetadata);
		this.audioElement.addEventListener('timeupdate', this.timeUpdate);
		this.audioElement.addEventListener('ended', this.audioEnded);
	}

	componentWillUnmount() {
		// console.log('App::componentWillUnmount');
		// prettier-ignore
		this.audioElement.removeEventListener('loadedmetadata',	this.loadedMetadata);
		this.audioElement.removeEventListener('timeupdate', this.timeUpdate);
		this.audioElement.removeEventListener('ended', this.audioEnded);
	}

	loadedMetadata = () => {
		// console.log('App::loadedMetadata');
		const { duration } = this.audioElement;
		this.setDuration(duration);
	};

	timeUpdate = () => {
		const { currentTime } = this.audioElement;
		// console.log('App::timeUpdate; NOT_APP_15_SEC_RULE ', NOT_APP_15_SEC_RULE, ' currentTime ', currentTime);
		if (NOT_APP_15_SEC_RULE) {
			this.setCurrentTime(currentTime);
		}
		else if (Math.floor(currentTime) < 15) {		// production
			this.setCurrentTime(currentTime);
		}
		else {
			this.stopAudio();
			this.audioEnded();
		}
	};

	audioEnded = () => {
		// console.log('App::audioEnded');
		const { folders } = this.props;
		const { folderId, trackId } = this.state;
		const id = nextTrack(folders, folderId, trackId);
		if (id === null) {
			this.setState({ trackId: null, playing: false });
		} else {
			this.selectTrack(id);
		}
	};

	loadAudio = () => {
		// console.log('App::loadAudio()');
		this.audioElement.load();
	};

	playAudio = () => {
		// console.log('App::playAudio()');
		this.audioElement.play();
		this.setState({ playing: true });
	};

	stopAudio = () => {
		// console.log('App::stopAudio()');
		this.audioElement.pause();
		this.setState({ playing: false });
	};

	setAudioTime = currentTime => {
		// console.log('App::setAudioTime; currentTime ', currentTime);
		this.audioElement.currentTime = currentTime;
	};

	selectTrack = trackId => {
		// console.log('App::selectTrack; trackId ', trackId);
		const { folders } = this.props;
		const { folderId } = this.state;
		if (isPlayerReady(folders, folderId, trackId)) {
			const mp3Url = `${SERVER_GET_TRACK}/${folderId}/${trackId}`;
			// console.log('set audio src = ', mp3Url);
			this.audioElement.src = mp3Url;
			this.loadAudio();
		}
		this.setState({ trackId });
		this.playAudio();
	};

	selectFolder = folderId => {
		// console.log('App::selectFolder; folderId ', folderId);
		const { folders } = this.props;
		if (folders[folderId].mp3.length > 0 && !folders[folderId].tags) {
			this.props.actions.fetchMusicMetaData(folderId);
		}
		this.setState({ folderId, trackId: null, playing: false });
	};

	setDuration = duration => {
		// console.log('App::setDuration; duration ', duration);
		this.setState({ duration, currentTime: 0 });
	};

	setCurrentTime = currentTime => {
		// console.log('App::setCurrentTime; currentTime ', currentTime);
		this.setState({ currentTime });
	};

	handleClick = type => {
		// console.log('App::handleClick; type ', type);
		const { folders } = this.props;
		const { folderId, trackId } = this.state;

		if (type === 'play-track') {
			this.playAudio();
		} else if (type === 'pause-track') {
			this.stopAudio();
		} else if (type === 'previous-track') {
			const id = previousTrack(folders, folderId, trackId);
			if (id !== null) {
				this.selectTrack(id);
			}
		} else if (type === 'next-track') {
			const id = nextTrack(folders, folderId, trackId);
			if (id !== null) {
				this.selectTrack(id);
			}
		}
	};

	render() {
		// console.log('App::render(); props, state ', this.props, this.state);
		// console.log('Developer mode ', DEVELOPMENT_SYSTEM);
		const { folders } = this.props;
		const { folderId, trackId, playing } = this.state;

		const playerReady = isPlayerReady(folders, folderId, trackId);

		return (
			<Container>
				<Header />

				<div>
					<audio
						ref={audio => {
							this.audioElement = audio;
						}}
					>
						<track kind="captions" />
						<source src="" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				{playerReady && (
					<Columns>
						<Rows>
							<PlayerControls
								playing={playing}
								onClick={type => this.handleClick(type)}
							/>

							<PlayerTrackInfo
								folders={folders}
								folderId={folderId}
								trackId={trackId}
							/>
						</Rows>

						<MuiSlider
							folders={folders}
							folderId={folderId}
							trackId={trackId}
							duration={this.state.duration}
							currentTime={this.state.currentTime}
							setTime={time => this.setAudioTime(time)}
						/>
					</Columns>
				)}

				<PlayerBreadCrumbs
					folders={folders}
					folderId={folderId}
					selectFolder={id => this.selectFolder(id)}
				/>

				<InnerContainer>
					<ShowFolders
						folders={folders}
						folderId={folderId}
						selectFolder={id => this.selectFolder(id)}
					/>
					<ShowTracks
						folders={folders}
						folderId={folderId}
						trackId={trackId}
						selectTrack={id => this.selectTrack(id)}
						playing={playing}
					/>
				</InnerContainer>
			</Container>
		);
	}
}

App.propTypes = {
	folders: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
	folderId: PropTypes.number,
	trackId: PropTypes.number,
	actions: PropTypes.shape({
		fetchMusicData: PropTypes.func.isRequired,
		fetchMusicMetaData: PropTypes.func.isRequired
	}).isRequired
};

App.defaultProps = {
	folderId: null,
	trackId: null
};

function mapStateToProps(state) {
	// console.log('App::mapStateToProps(), state ', state);
	return {
		folders: state.data.folders
	};
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default compose(
	withStyles(AllStyles, {
		name: 'AllStyles',
		withTheme: true
	}),
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(App);

/*
<PlayerSlider
	folders={folders}
	folderId={folderId}
	trackId={trackId}
	duration={this.state.duration}
	currentTime={this.state.currentTime}
	setTime={time => this.setAudioTime(time)}
/>
*/
