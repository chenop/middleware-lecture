import * as actions from 'consts/action-types';

export default function booksReducer(state = [], action) {
	switch (action.type) {
		case actions.SET_BOOKS:
			return [
				...action.payload
			];
		default:
			return state;

	}
}