import * as actions from 'consts/action-types';

export const setBooks = (payload) => ({
	type: actions.SET_BOOKS,
	payload
});

export const fetchBooks = () => (dispatch) => {
	fetch('api/books.json')
		.then(response => response.json())
		.then(data => dispatch(setBooks(data)));
};

export const updateBook = (id, newName) => ({
	type: actions.API,
	payload: {
		url: `api/books/${ id }`,
		method: 'PUT',
		data: {
			name: newName
		}
	}
});