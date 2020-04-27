//

import { FETCH_MUSIC_DATA, FETCH_MUSIC_METADATA } from '../constants';

const initialState = {
	folders: []
};

export default (state = initialState, action) => {
	if (action.type === FETCH_MUSIC_DATA) {
		// console.log('FETCH_MUSIC_DATA; action.payload ', action.payload);
		return { ...state, folders: action.payload.folders };
	}

	if (action.type === FETCH_MUSIC_METADATA) {
		// console.log('FETCH_MUSIC_METADATA; action.payload ', action.payload);
		const { folder } = action.payload;
		const tags = JSON.parse(JSON.stringify(folder.tags));

		const folders = JSON.parse(JSON.stringify(state.folders));
		folders[folder.index].tags = tags;
		return { folders };
	}
	return state;
};
