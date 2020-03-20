import moment from 'moment';

const initialState = {
    orders: [],
    loading: false,
};

export function ordersReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ORDERS_REQUESTED':
            return { ...state, loading: true };
        case 'GET_ORDERS_SUCCESS':
            return { ...state, loading: false, orders: action.orders };
        case 'GET_ORDERS_FAILED':
            return {
                ...state,
                loading: false,
                error: action.errors,
            };

        default:
            return state;
    }
}
