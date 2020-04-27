//

import React from 'react';
import PropTypes from 'prop-types';

import { videoType } from '../types';

import './VideoItem.scss';

const VideoItem = (props) => {
	const { video, onVideoSelect } = props;
	return (
		<div className="video-item item" onClick={() => onVideoSelect(video)} >
			<img className="ui image" alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	)
}

VideoItem.propTypes = {
	video: videoType.isRequired, // eslint-disable-line react/no-typos
	onVideoSelect: PropTypes.func.isRequired
};

export default VideoItem;
