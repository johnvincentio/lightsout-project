
import { HANDLE_USERS } from '../constants';

export default (state = [], action) => {
	switch (action.type) {
		case HANDLE_USERS:
			return { ...state, users: action.payload };
		default:
			return state;
	}
};
