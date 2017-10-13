const log = ({getState, dispatch}) => next => action => {
	console.log('Action: ' + action.type, action);

	next(action);
};

export default log;

const api = ({ dispatch, getState }) => next => action => {

	if (action.type !== actions.API) {
		return next(action);
	}

	const { url, success, schema, label } = action.payload;

	dispatch(startNetwork(label));

	fetch(url)
		.then(response => response.json())
		.then(data => {
			if (schema) {
				data = normalize(data, schema);
			}

			dispatch(success(data));

			dispatch(endNetwork(label));
		})
		.catch(error => {
			console.error(error);
			dispatch(endNetwork(label))
		})
};

export default api;