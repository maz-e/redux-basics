import * as actionTypes from '../actions/actionTypes';

const initialSate = {
    results: []
}

const reducer = (state = initialSate, action) => {
    const { STORE_RESULT, DELETE_RESULT } = actionTypes;
    switch (action.type) {
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result * 2})
            };
        case DELETE_RESULT:
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