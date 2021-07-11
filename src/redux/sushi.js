import axios from "axios";

const initialState = {
    items: [],
    isLoading: false
};

const sushi = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SUSHI': {
            return {
                ...state,
                items: action.payload,
                isLoading: true
            }
        }
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export const setSushi = (items) => ({
    type: "SET_SUSHI",
    payload: items
});

export const setLoaded = (value) => ({
    type: "SET_LOADING",
    payload: value
});

export const fetchSushi = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/sushi?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({data}) => {
        dispatch(setSushi(data));
        dispatch(setLoaded(true));
    })
};

export default sushi;