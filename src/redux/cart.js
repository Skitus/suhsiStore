const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SUSHI_TO_CART": {

            const curretnId = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {

                    items: curretnId,
                    totalPrice: curretnId.reduce((sum, obj) => obj.prices + sum, 0)
                },
            };

            const arrTotalCount = [].concat.apply([], Object.values(newItems).map(obj => obj.items));

            const arrTotalPrice = arrTotalCount.reduce((sum, obj) => obj.prices + sum, 0);

            return {
                ...state,
                items: newItems,
                totalCount: arrTotalCount.length,
                totalPrice: arrTotalPrice
            };
        }
        case "CLEAR_SUSHI": {
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        }
        case "REMOVE_CART_ITEM": {
            const removeNewItems = {
                ...state.items
            }

            const currentTotalPrice = removeNewItems[action.payload].totalPrice;
            const currentTotalCount = removeNewItems[action.payload].items.length;

            delete removeNewItems[action.payload];
            return {
                ...state,
                items: removeNewItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }


        default:
        {
            return state;
        }
    }
}


export const removeCartItem = (id) => ({
    type: "REMOVE_CART_ITEM",
    payload: id
});

export const clearSushi = () => ({
    type: 'CLEAR_SUSHI'
});

export const addSushiToCart = (sushiObj) => ({
    type: 'ADD_SUSHI_TO_CART',
    payload: sushiObj
});

export default cart;