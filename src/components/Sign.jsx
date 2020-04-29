//

/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

class Sign extends React.Component {

	render() {
		const { complete } = this.props;
		return (
			<div className="sign">
				{complete ? (
					<div>
						<span className="sign--first">Vic</span>
						<span className="sign--second">Tory</span>
					</div>
				) : (
					<div>
						<span className="sign--first">Lights</span>
						<span className="sign--second">Out</span>
					</div>					
				)}
			</div>
		);
	}
}

Sign.propTypes = {
	complete: PropTypes.bool.isRequired
}

export default Sign;
