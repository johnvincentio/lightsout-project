//

import React from 'react';

import { Store } from './Store';
import { IEpisodeProps } from './interfaces';
import { fetchDataAction, toggleFavAction } from './actions';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

export default function HomePage() {
	const { state, dispatch } = React.useContext(Store);

	React.useEffect(() => {
		state.episodes.length === 0 && fetchDataAction(dispatch);
	});

	const props: IEpisodeProps = {
		episodes: state.episodes,
		store: { state, dispatch },
		toggleFavAction,
		favourites: state.favourites
	};

	return (
		<React.Fragment>
			{console.log(state.episodes)}
			<React.Suspense fallback={<div>loading...</div>}>
				<section className="episode-layout">
					<EpisodesList {...props} />
				</section>
			</React.Suspense>
		</React.Fragment>
	);
}
