import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialSate = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedResults = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, { results: updatedResults} );
};

const reducer = (state = initialSate, action) => {
    const { STORE_RESULT, DELETE_RESULT } = actionTypes;
    switch (action.type) {
        case STORE_RESULT:
            return updateObject(state, { results: state.results.concat({id: new Date(), value: action.result}) });

        case DELETE_RESULT:
            return deleteResult(state, action);
            
        default:
            return state;
    }
}

export default reducer;