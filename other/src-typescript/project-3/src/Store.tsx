//

import React from 'react';

import { IState, IAction, IEpisode } from './interfaces';

const initialState: IState = {
	episodes: [],
	favourites: []
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
	switch (action.type) {
		case 'FETCH_DATA':
			return { ...state, episodes: action.payload };
		case 'ADD_FAV':
			const episode = action.payload;
			const episodeInFav = state.favourites.includes(episode);
			if (episodeInFav) {
				const arr = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id);
				return { ...state, favourites: [...arr] };
			}
			return { ...state, favourites: [...state.favourites, episode] };
		default:
			return state;
	}
}

export function StoreProvider(props: any): JSX.Element {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
}
