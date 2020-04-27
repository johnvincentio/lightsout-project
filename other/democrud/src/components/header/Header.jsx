//

import React from 'react';

import { Link } from 'react-router-dom';

import GoogleAuthentication from './GoogleAuthentication';

const Header = () => {
	return (
		<header>
			<div className="header-container">
				<div
					className="header-logo"
					role="presentation"
					itemScope=""
					itemType="http://schema.org/Product"
				>
					<h1>
						<Link to="/">
							<span itemProp="name">
								Demo<span className="bold-text">CRUD</span>
							</span>
						</Link>
					</h1>
				</div>
				<div />

				<nav className="header-nav">
					<ul>
						<li>
							<Link to="/">All Widgets</Link>
						</li>
						<li>
							<GoogleAuthentication />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
