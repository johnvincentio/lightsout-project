//

import React from 'react';
import PropTypes from 'prop-types';

import VideoItem from './VideoItem';

import { videosType } from '../types';

import './VideoList.scss';

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map((video) => (
		<VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
	));
	return (
		<div className="ui relaxed divided list">{renderedList}</div>
	)
}

VideoList.propTypes = {
	videos: videosType.isRequired, // eslint-disable-line react/no-typos
	onVideoSelect: PropTypes.func.isRequired
};

export default VideoList;
