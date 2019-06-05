import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import 'regenerator-runtime/runtime';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 444, createdAt: 333 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 888, createdAt: 111}));
store.dispatch(addExpense({ description: 'electric bill', amount: 222, createdAt: 555}));

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// store.dispatch(setTextFilter("bill"));

// setTimeout(() => {
//     store.dispatch(setTextFilter("gas"));
// }, 3000)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();

