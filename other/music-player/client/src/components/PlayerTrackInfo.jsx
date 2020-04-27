// PlayerTrackInfo

import React from 'react';
import PropTypes from 'prop-types';

import { isPlayerReady } from '../utilities/utils';

import { Title, SubTitle } from './AllStyles';

const PlayerTrackInfo = ({ folders, folderId, trackId }) => {
	if (!isPlayerReady(folders, folderId, trackId)) {
		return '';
	}
	const currentFolder = folders[folderId];
	const mp3 = currentFolder.mp3[trackId];
	const track = mp3.file.replace(/\.[^/.]+$/, '');
	const trackIdx = mp3.index;
	const showTagInfo = currentFolder.tags && currentFolder.tags[trackIdx];
	return (
		<div>
			<Title noWrap variant="h6">
				{track}
			</Title>
			<SubTitle>
				{showTagInfo ? currentFolder.tags[trackIdx].album : ''}
			</SubTitle>
			<SubTitle>
				{showTagInfo ? currentFolder.tags[trackIdx].artist : ''}
			</SubTitle>
		</div>
	);
};

PlayerTrackInfo.propTypes = {
	folders: PropTypes.any, // eslint-disable-line react/forbid-prop-types
	folderId: PropTypes.number,
	trackId: PropTypes.number
};

PlayerTrackInfo.defaultProps = {
	folders: [],
	folderId: null,
	trackId: null
};

export default PlayerTrackInfo;
