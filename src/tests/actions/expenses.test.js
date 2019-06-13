import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense, 
    addExpense, 
    removeExpense, 
    editExpense, 
    startSetExpenses 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'uid';
const createMockStore = configureMockStore([thunk]);

// ADD
test('should setup add expense action object with provided values', () => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({auth: {uid} });
    const data = {
        description: 'crippling debt',
        note: 'yhyy',
        amount: 1110,
        createdAt: 1110
    };

    store.dispatch(startAddExpense(data)).then(() => {
        const actions = store.getActions();
        expect( actions[0] ).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id:expect.any(String),
                ...data
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapShot) => {
        expect(snapShot.val()).toEqual(data);
        done();
    });
});

test('should add expense with default to database and store', (done) => {
    const store2 = createMockStore({ auth: { uid } });
    const defaultData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    store2.dispatch(startAddExpense({})).then(() => {
        const actions2 = store2.getActions();
        expect(actions2[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions2[0].expense.id}`).once('value');
    }).then((snapShot) => {
        expect(snapShot.val()).toEqual(defaultData);
        done();
    });
})

// REMOVE
test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

// EDIT
test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {
        description: 'newDescription',
        amount: 1,
        note: 'newNote'
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            description: 'newDescription',
            amount: 1,
            note: 'newNote'
        }
    });
});

// test('fetch from firebase', (done) => {
//     const store = createMockStore({});
//     store.dispatch(startSetExpenses()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'SET_EXPENSES',
//             expenses
//         });
//         done();
//     });
// });