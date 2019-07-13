import {INCREMENT, DECREMENT} from "../actions";

const initialState={count:0};

const  reducer=( state=initialState, action ) => {
	switch( action.type ) {
		case INCREMENT:
			return {
				...state,
				count: state.count+action.payload
			}
		// Fill in the body of this case
		case DECREMENT:
			return {
				...state,
				count: state.count-action.payload
			}
		default:
			return state;
	}
}

export default reducer