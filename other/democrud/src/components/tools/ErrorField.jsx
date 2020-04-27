//

import React from 'react';

import PropTypes from 'prop-types';

const ErrorField = ({ error, text }) => {
	if (error) {
		return <span className="error-text">* {text}</span>;
	}
	return <span>{text}</span>;
};

ErrorField.propTypes = {
	error: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default ErrorField;
