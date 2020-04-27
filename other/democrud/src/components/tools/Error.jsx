//

import React from 'react';

import PropTypes from 'prop-types';

const Error = props => <div className="error-text">{props.text}</div>;

Error.propTypes = {
	text: PropTypes.string
};

Error.defaultProps = {
	text: null
};

export default Error;
