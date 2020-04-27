
import { HANDLE_USER } from '../constants';

export default (state = [], action) => {
	switch (action.type) {
		case HANDLE_USER:
			if (action.payload.length < 1) {
				return state;
			}
			return [...state, action.payload[0]];
		default:
			return state;
	}
};
