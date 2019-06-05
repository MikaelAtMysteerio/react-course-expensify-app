import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const addExpence = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expensesReducerDefaultState = [];
const filtherReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return
                };

            });
        default:
            return state;
    }

};

const setTextFilther = (text) => ({
    type: 'SET_FILTHER',
    text
});

const setSortBy = (sortBy) => ({
    type: 'SET_SORT_BY',
    sortBy
});

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

const filtersReducer = (state = filtherReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTHER':
            if (action.text) {
                return {
                    ...state,
                    text: action.text
                }
            } else {
                return state;
            }
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }

        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= startDate;
        const expenseText = expense.description.toLowerCase();
        const textMatch = expenseText.includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy == "date") {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const expenseTwo = store.dispatch(addExpence({ description: 'coffee', amount: 11, createdAt: -111 }));
const expenseOne = store.dispatch(addExpence({ description: 'rent', amount: -111, createdAt: -555 }));

// store.dispatch(removeExpense({id: expenseOne.expense.id}) );

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 999}))

// store.dispatch(setTextFilther('re'));
// store.dispatch(setTextFilther());

// store.dispatch(sortByAmount());
store.dispatch(setSortBy('amount'));


//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 'efdwfd',
        description: 'rent',
        note: 'effeor gfoej gpj rejg',
        amount: 12300,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined,
    }
};

// const user = {
//     name: 'jen',
//     age: 22
// };

// console.log({
//     age: 33,
//     ...user,
//     loc: 'helsinki'
// })