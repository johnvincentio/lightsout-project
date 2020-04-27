//

import React from 'react';
import PropTypes from 'prop-types';

import Icons from '../../../icons/icons.svg';

const Icon = ({ name, css }) => (
	<svg className={css} aria-hidden="true">
		<use xlinkHref={`${Icons}#icon-${name}`} />
	</svg>
);

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	css: PropTypes.string
};

Icon.defaultProps = {
	css: ''
};

export default Icon;
