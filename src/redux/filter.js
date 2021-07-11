const initialState = {
    sortBy: {
        type: 'rating',
        order: 'asc',
    },
    category: null,
};

const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY': {
            return {
                ...state,
                category: action.payload
            }
        }
        case 'SET_SORT_BY': {
            return {
                ...state,
                sortBy: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
});

export const setSortBy = (sort) => ({
    type: 'SET_SORT_BY',
    payload: sort
});

export default filter;