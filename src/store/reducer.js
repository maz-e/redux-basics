const initialSate = {
    counter: 0
}

const reducer = (state = initialSate, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        };
    }
    
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        };
    }

    if (action.type === 'ADD_FIVE') {
        return {
            counter: state.counter + 5
        };
    }

    if (action.type === 'SUBS_FIVE') {
        return {
            counter: state.counter - 5
        };
    }

    return state;
}

export default reducer;