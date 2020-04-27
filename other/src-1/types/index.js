//

import PropTypes from 'prop-types';

/*
* Describe Video type
*/
export const songType = PropTypes.shape({
	title: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired
});

/*
* Describe Videos type
*/
export const songsType = PropTypes.arrayOf(songType.isRequired);
