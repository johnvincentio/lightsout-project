
import PropTypes from 'prop-types';

export const postType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	body: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	userId: PropTypes.number.isRequired
});

export const postsType = PropTypes.arrayOf(postType.isRequired);

export const userType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired
});

export const usersType = PropTypes.arrayOf(userType.isRequired);
