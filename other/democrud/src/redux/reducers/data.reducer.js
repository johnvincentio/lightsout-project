//

import _ from 'lodash';

import {
	FETCH_WIDGETS,
	FETCH_WIDGET,
	CREATE_WIDGET,
	EDIT_WIDGET,
	DELETE_WIDGET,
	SEARCH_WIDGETS
} from '../constants';

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_WIDGETS:
			// console.log('FETCH_WIDGETS; action.payload ', action.payload);
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case FETCH_WIDGET:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_WIDGET:
			// console.log('CREATE_WIDGET; action ', action);
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_WIDGET:
			// console.log('EDIT_WIDGET; action ', action);
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_WIDGET:
			return _.omit(state, action.payload);
		case SEARCH_WIDGETS:
			// console.log('SEARCH_WIDGETS; action.payload ', action.payload);
			return { ..._.mapKeys(action.payload, 'id') };
		default:
			return state;
	}
};
