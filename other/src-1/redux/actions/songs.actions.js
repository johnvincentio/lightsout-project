//

import SONG_SELECTED from '../constants';

/* eslint-disable import/prefer-default-export */
export const selectSong = (song) => ({
	type: SONG_SELECTED,
	payload: song
});
