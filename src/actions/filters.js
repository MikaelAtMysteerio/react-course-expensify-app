export const setTextFilter = (text = '') => ({
    type: 'SET_FILTHER',
    text
});

export const setSortBy = (sortBy) => ({
    type: 'SET_SORT_BY',
    sortBy
});

export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})
export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

