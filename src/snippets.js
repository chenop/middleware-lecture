const log = ({getState, dispatch}) => next => action => {
	console.log('Action: ' + action.type, action);

	next(action);
};

export default log;

const api = ({dispatch, getState}) => next => action => {
	if (action.type !== actions.API) {
		return next(action);
	}

	let {url, success} = action.payload;

	fetch(url)
		.then(response => response.json())
		.then(data => dispatch(success(data)));

	return next(action);
};

export default api;

export const fetchBooks = () => ({
	type: actions.API,
	payload: {
		url: 'api/books.json',
		success: setBooks
	},
	meta: {
		throttle: 1000
	}

});

export const fetchAuthors = () => ({
	type: actions.API,
	payload: {
		url: 'api/authors.json',
		success: setAuthors
	}
});


store.dispatch({'MSG_ERROR', payload: 'show the toaster'})