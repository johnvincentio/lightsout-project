//

import jsondata from '../../apis/jsonPlaceHolder';
import {
	FETCH_WIDGETS,
	FETCH_WIDGET,
	CREATE_WIDGET,
	EDIT_WIDGET,
	DELETE_WIDGET,
	SEARCH_WIDGETS
} from '../constants';

import * as utils from '../../utilities/utils';

export const fetchWidgets = () => async dispatch => {
	// console.log('---data.actions; fetchWidgets');
	const response = await jsondata.get('./widgets');
	// console.log('---data.actions; response ', response);
	dispatch({ type: FETCH_WIDGETS, payload: response.data });
};

export const fetchWidget = id => async dispatch => {
	const response = await jsondata.get(`./widgets/${id}`);
	dispatch({ type: FETCH_WIDGET, payload: response.data });
};

export const createWidget = widget => async (dispatch, getState) => {
	// console.log('action:: createWidget, widget ', widget);
	const { userId } = getState().auth;
	// console.log('userId ', userId);
	const response = await jsondata.post('./widgets', { ...widget, userId });
	dispatch({ type: CREATE_WIDGET, payload: response.data });
};

export const editWidget = (id, widget) => async dispatch => {
	// console.log('editWidget; id ', id, ' widget ', widget);
	const response = await jsondata.patch(`./widgets/${id}`, widget);
	dispatch({ type: EDIT_WIDGET, payload: response.data });
};

export const deleteWidget = id => async dispatch => {
	await jsondata.delete(`./widgets/${id}`);
	dispatch({ type: DELETE_WIDGET, payload: id });
};

export const searchWidgets = query => async dispatch => {
	// console.log('---data.actions; searchWidgets, query ', query);
	const response = await jsondata.get('./widgets');
	// console.log('---data.actions; response ', response);
	const searchResults = utils.search(query, response.data);
	// console.log('searchResults ', searchResults);
	dispatch({ type: SEARCH_WIDGETS, payload: searchResults });
};
