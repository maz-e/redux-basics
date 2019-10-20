import * as actionTypes from './actions';
//other way to import
// import {INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, DELETE_RESULT} from './actions';

const initialSate = {
    counter: 0,
    results: []
}

const reducer = (state = initialSate, action) => {
    const { INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, DELETE_RESULT } = actionTypes;
    switch (action.type) {
        case INCREMENT:
            // Copy the state object
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case DECREMENT:
            // Short way to copy the state object and return it
            return {
                ...state,
                counter: state.counter - 1
            };
        case ADD:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            };
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            };
        case DELETE_RESULT:
            // A way to updating Arrays immutably 
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            
            // Common way to updating Arrays immutably
            const updatedResults = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedResults
            }
        default:
            return state;
    }
}

export default reducer;