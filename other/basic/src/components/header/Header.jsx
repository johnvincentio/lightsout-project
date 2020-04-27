//

import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../tools/Icon';

/* eslint-disable react/prefer-stateless-function */

class Header extends React.Component {
	render() {
		const { search } = this.props;
		return (
			<div>
				<header className="header">
					<div className="header--title-link">
						<Icon name="github" css="header--icon" />
						GithubHelper
					</div>
					{search && (
						<button type="button" className="header--nav-link" onClick={this.props.onSearchSelected}>
							SEARCH
						</button>
					)}
				</header>
				<div className="header--spacer"></div>
			</div>
		);
	}
}

Header.propTypes = {
	search: PropTypes.bool.isRequired,
	onSearchSelected: PropTypes.func.isRequired
};

export default Header;
