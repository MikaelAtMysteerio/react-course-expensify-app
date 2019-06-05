import moment from 'moment';

const filtherReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

const filtersReducer = (state = filtherReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTHER':
            if (action.text) {
                return {
                    ...state,
                    text: action.text
                }
            } else {
                return {
                    ...state,
                    text: ''
                }
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

export default filtersReducer;