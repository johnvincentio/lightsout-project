//

import { SIGN_IN, SIGN_OUT } from '../constants';

const initialState = {
	signedIn: false,
	userId: null
};

export default (state = initialState, action) => {
	// console.log('auth.reducer; action ', action);
	switch (action.type) {
		case SIGN_IN:
			return { ...state, signedIn: true, userId: action.payload };
		case SIGN_OUT:
			return { ...state, signedIn: false, userId: null };
		default:
			return state;
	}
};
