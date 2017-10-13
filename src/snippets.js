const log = ({getState, dispatch}) => next => action => {
	console.log('Action: ' + action.type, action);

	next(action);
};

export default log;

