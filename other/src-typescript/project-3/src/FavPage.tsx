//

import React from 'react';

import { Store } from './Store';
import { IEpisodeProps } from './interfaces';
import { fetchDataAction, toggleFavAction } from './actions';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

export default function FavPage(): JSX.Element {
	const { state, dispatch } = React.useContext(Store);

	React.useEffect(() => {
		state.episodes.length === 0 && fetchDataAction(dispatch);
	});

	const props: IEpisodeProps = {
		episodes: state.favourites,
		store: { state, dispatch },
		toggleFavAction,
		favourites: state.favourites
	};

	return (
		<React.Fragment>
			<h1>FavPage</h1>
			{console.log('favPage; favourites ', state.favourites)}
			<React.Suspense fallback={<div>loading...</div>}>
				<section className="episode-layout">
					<EpisodesList {...props} />
				</section>
			</React.Suspense>
		</React.Fragment>
	);
}
