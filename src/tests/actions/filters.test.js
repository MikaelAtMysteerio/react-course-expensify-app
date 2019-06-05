import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, setSortBy} from '../../actions/filters';

test('generate setStartDate action object ', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('generate endStartDate action object ', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});


test('generate setTextFilter action object ', () => {
    const action = setTextFilter('text');
    expect(action).toEqual({
        type: 'SET_FILTHER',
        text: 'text'
    });
});

test('generate setTextFilter action object ', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_FILTHER',
        text: ''
    });
});

test('generate sortByFilter action object ', () => {
    const action = setSortBy('filter');
    expect(action).toEqual({
        type: 'SET_SORT_BY',
        sortBy: 'filter'
    });
});
