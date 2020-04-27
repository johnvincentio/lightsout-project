//

import PropTypes from 'prop-types';

/*
 * Describe a widget
 */

export const widgetType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	sku: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string,
	created: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	userId: PropTypes.string
});

/*
 * Describe widgets
 */

export const widgetsType = PropTypes.arrayOf(widgetType.isRequired);

/*
 * Describe match
 */

export const matchType = PropTypes.shape({
	isExact: PropTypes.bool.isRequired,
	path: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	params: PropTypes.any.isRequired
	// params: PropTypes.shape({
	// 	id: PropTypes.string.isRequired
	// }).isRequired
});
