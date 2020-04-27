//

import React from 'react';

import { videoType } from '../types';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>
	}
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<div>
			<div className="ui embed">
				<iframe
					title="Video player"
					src={videoSrc}
					width="560" height="315"
				/>
			</div>
			<div className="ui segment">
				<h4 className="ui header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	)
}

VideoDetail.defaultProps = {
	video: null
}

VideoDetail.propTypes = {
	video: videoType // eslint-disable-line react/no-typos
};

export default VideoDetail;
