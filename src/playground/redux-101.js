import React from 'react';

import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 }) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});
const resetCount = () => ({
    type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            const count = action.count;
            return {
                count: count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(setCount({ count: 100 }));
store.dispatch(incrementCount({ incrementBy: 3 }));
store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(resetCount());
