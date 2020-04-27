//

import React from 'react';

import { Link } from 'react-router-dom';
import { Store } from './Store';

import './App.scss';

export default function App(props: any): JSX.Element {
	const { state } = React.useContext(Store);

	return (
		<React.Fragment>
			<header className="header">
				<div>
					<h1>
						<Link to="/">Rick and Morty</Link>
					</h1>
					<p>Pick you favorite episode</p>
				</div>
				<div>
					<Link to="/favs">Favourite(s): {state.favourites.length}</Link>
				</div>
			</header>
			{console.log(state.favourites)}
			{props.children}
		</React.Fragment>
	);
}
