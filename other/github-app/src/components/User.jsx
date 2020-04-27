//

import React from 'react';

import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */

class User extends React.Component {
	render() {
		const { user } = this.props;
		return (
			<section className="user">
				<div className="user--figure">
					<figure>
						<img src={user.avatar_url} alt={user.login} />
						<figcaption>
							<h2 className="user--title">{user.name}</h2>
							<p className="user--text">{user.location}</p>
						</figcaption>
					</figure>
				</div>

				<div className="user--bio">
					<h2 className="user--bio-text">Username: {user.login}</h2>
					{user.company && <div className="user--bio-text">Company: {user.company}</div>}
					{user.bio && <div className="user--bio-info">Bio: {user.bio}</div>}
				</div>
			</section>
		);
	}
}

User.propTypes = {
	user: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default User;
