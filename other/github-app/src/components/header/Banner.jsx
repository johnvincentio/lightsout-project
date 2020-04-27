//

import React from 'react';
import PropTypes from 'prop-types';

import Search from './Search';

/* eslint-disable react/prefer-stateless-function */

class Banner extends React.Component {
	render() {
		return (
			<header className="banner" role="banner">
				<h1 className="banner--title">Github Helper</h1>
				<h2 className="banner--subtitle">Lookup your favorite Github users</h2>
				<Search onSubmit={this.props.onSubmit} />
			</header>
		);
	}
}

Banner.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default Banner;
