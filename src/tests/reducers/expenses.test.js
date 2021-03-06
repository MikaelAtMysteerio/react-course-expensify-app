import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( [expenses[0], expenses[2] ])
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-12'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const newExpense = {
        id: '3',
        description: 'a3',
        note: 'newNote',
        createdAt: 10000,
        amount: 100 
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state[3]).toEqual(newExpense);
});

test('should edit an expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'a',
            note: 'newNote',
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({
        id: '0',
        description: 'a',
        note: 'newNote',
        amount: 10,
        createdAt: 0
    });
});

test('should NOT edit an expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'false',
        updates: {
            description: 'a',
            note: 'newNote',
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
