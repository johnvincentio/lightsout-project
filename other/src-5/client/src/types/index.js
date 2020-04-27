
import PropTypes from 'prop-types';

/*
* Describe a stream
*/

export const streamType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	userId: PropTypes.string
});

/*
* Describe streams
*/

export const streamsType = PropTypes.arrayOf(streamType.isRequired);

/*
* Describe match
*/

export const matchType = PropTypes.shape({
	isExact: PropTypes.bool.isRequired,
	path: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	params: PropTypes.shape({
		id: PropTypes.string.isRequired
	}).isRequired
});
