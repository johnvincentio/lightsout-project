//

/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

class Sign extends React.Component {

	render() {
		return (
			<div className="sign">
				<span className="sign--lights">Lights</span>
				<span className="sign--out">Out</span>
			</div>
		);
	}
}

Sign.propTypes = {
	complete: PropTypes.bool.isRequired
}

export default Sign;
