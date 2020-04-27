//

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { List, ListItem, ListItemText } from '@material-ui/core';

import PlayCircleFilledWhite from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';

import { AllStyles, FilesContainer } from './AllStyles';

import { isShowFilesReady, isTrackPlaying } from '../utilities/utils';

class ShowTracks extends React.Component {
	selectTrack = (e, trackId) => {
		e.preventDefault();
		// console.log('ShowTracks::selectTrack; trackId ', trackId);
		this.props.selectTrack(trackId);
	};

	renderCurrentFiles(folders, folderId, trackId, playing) {
		const { classes } = this.props;
		const currentFolder = folders[folderId];
		return currentFolder.mp3.map(item => (
			<div key={item.index}>
				<ListItem button onClick={event => this.selectTrack(event, item.index)}>
					{isTrackPlaying(item.index, playing, trackId) ? (
						<PauseCircleFilled className={classes.playIcon} />
					) : (
						<PlayCircleFilledWhite className={classes.playIcon} />
					)}

					<ListItemText
						className={classes.itemText}
						inset
						primary={item.file.replace(/\.[^/.]+$/, '')}
						secondary={
							currentFolder.tags && currentFolder.tags[item.index]
								? currentFolder.tags[item.index].artist
								: ''
						}
					/>
				</ListItem>
			</div>
		));
	}

	render() {
		const { folders, folderId, trackId, playing } = this.props;

		if (!isShowFilesReady(folders, folderId)) {
			return '';
		}
		return (
			<FilesContainer>
				<List>
					{this.renderCurrentFiles(folders, folderId, trackId, playing)}
				</List>
			</FilesContainer>
		);
	}
}

ShowTracks.propTypes = {
	classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
	folders: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
	folderId: PropTypes.number,
	trackId: PropTypes.number,
	playing: PropTypes.bool.isRequired,
	selectTrack: PropTypes.func.isRequired
};

ShowTracks.defaultProps = {
	folderId: null,
	trackId: null
};

export default withStyles(AllStyles, {
	name: 'ShowFolders',
	withTheme: true
})(ShowTracks);
