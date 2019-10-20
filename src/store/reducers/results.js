import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initialSate = {
    results: []
}

const reducer = (state = initialSate, action) => {
    const { STORE_RESULT, DELETE_RESULT } = actionTypes;
    switch (action.type) {
        case STORE_RESULT:
            return updateObject(state, { results: state.results.concat({id: new Date(), value: action.result}) });

        case DELETE_RESULT:
            const updatedResults = state.results.filter(result => result.id !== action.resultElId);
            return updateObject(state, { results: updatedResults} );
            
        default:
            return state;
    }
}

export default reducer;