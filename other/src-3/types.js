//

import PropTypes from 'prop-types';

/*
* Describe Video type
*/
export const videoType = PropTypes.shape({
	id: PropTypes.shape({
		videoId: PropTypes.string.isRequired
	}).isRequired,
	snippet: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		thumbnails: PropTypes.shape({
			medium: PropTypes.shape({
				url: PropTypes.string.isRequired,
				height: PropTypes.number.isRequired,
				width: PropTypes.number.isRequired
			}).isRequired,
		}).isRequired,
	}).isRequired
});

/*
* Describe Videos type
*/
export const videosType = PropTypes.arrayOf(videoType.isRequired);
