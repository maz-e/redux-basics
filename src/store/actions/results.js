import * as actionTypes from './actionTypes'

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result
    };
};

export const storeResult = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);  
    };

    // Including logic and using getState into action creators but is better not include more logic here,
    //   better into reducers. 
    // return (dispatch, getState) => {
    //     setTimeout(() => {
    //         const oldCounter = getState().ctr.counter;
    //         console.log(oldCounter);
    //         dispatch(saveResult(res));
    //     }, 2000);  
    // };
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
} 