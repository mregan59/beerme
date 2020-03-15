import moment from 'moment';

const initialState = {
    loading: false,

    order: {
        delivery_date: moment()
            .add(14)
            .toDate(),
        brewery: 'Test Brewery',
        beers: {},
    },
};

export function checkoutReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BEER_TO_ORDER':
            //
            let beers = Object.assign({}, state.order.beers);
            let finalBeers = null;
            if (action.quantity == 0) {
                delete beers[action.beer.id];
                finalBeers = beers;
            } else {
                finalBeers = {
                    ...beers,
                    [action.beer.id]: action.beer,
                };
            }

            return {
                ...state,
                order: {
                    ...state.order,
                    beers: finalBeers,
                },
            };
        case 'REMOVE_BEER_FROM_ORDER':
            return {
                ...state,
                order: {
                    ...state.order,
                    beers: {
                        ...state.order.beers,
                        [action.beer.id]: undefined,
                    },
                },
            };
        case 'CONFIRM_ORDER_REQUESTED':
            return { ...state, loading: true };
        case 'CONFIRM_ORDER_SUCCESS':
            return { ...state, loading: false };
        case 'CONFIRM_ORDER_FAILED':
            return {
                ...state,
                loading: false,
                error: action.errors,
            };
        case 'CLEAR_ORDER':
            return {
                ...initialState,
            };

        default:
            return state;
    }
}
