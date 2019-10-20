import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialSate = {
    counter: 0
}

const reducer = (state = initialSate, action) => {
    const { INCREMENT, DECREMENT, ADD, SUBTRACT } = actionTypes;
    switch (action.type) {
        case INCREMENT:
            return updateObject(state, { counter: state.counter + 1 });

        case DECREMENT:
            return updateObject(state, { counter: state.counter - 1 });
            
        case ADD:
            return updateObject(state, { counter: state.counter + action.value });
            
        case SUBTRACT:
            return updateObject(state, { counter: state.counter - action.value });
            
        default:
            return state;
    }
}

export default reducer;