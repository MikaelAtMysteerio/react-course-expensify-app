import moment from 'moment';

export default [{
    id: '0',
    description: 'a',
    note: '',
    amount: 10,
    createdAt: 0
}, {
    id: '1',
    description: 'ab',
    note: '',
    amount: 20,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '2',
    description: 'abc',
    note: '',
    amount: 30,
    createdAt: moment(0).add(4, 'days'.valueOf())
}];