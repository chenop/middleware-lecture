import * as actions from 'consts/action-types';

export default function authorsReducer(state = [], action) {
	switch (action.type) {
		case actions.SET_AUTHORS:
			return [
				...action.payload
			];
		default:
			return state;

	}
}