import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    });
});

test('set up sort by to string amount', () => {
    const state = filtersReducer(undefined, { type: 'SET_SORT_BY', sortBy: 'amount'});
    expect(state.sortBy).toBe("amount")
})

test('set up sort by to string date', () => {
    const state = filtersReducer(undefined, { type: 'SET_SORT_BY', sortBy: 'date' });
    expect(state.sortBy).toBe("date");
})

test('set up default filter set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_FILTHER', text: 'text' });
    expect(state.text).toEqual('text');
});

test('set up default filter SET_START_DATE', () => {
    const date = moment();
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', date: date });
    expect(state.startDate).toEqual(date);
});

test('set up default filter SET_END_DATE', () => {
    const date = moment();
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', date: date });
    expect(state.endDate).toEqual(date);
});