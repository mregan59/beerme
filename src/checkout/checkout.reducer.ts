const initialState = {
    loading: false,
    order: {},
};

export function checkoutReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BEER_TO_ORDER':
            let beer =
                action.quantity == 0
                    ? undefined
                    : {
                          ...action.beer,
                          checkoutQuantity: action.quantity,
                      };

            return {
                ...state,
                order: {
                    ...state.order,
                    [action.beer.id]: beer,
                },
            };
        case 'REMOVE_BEER_FROM_ORDER':
            return {
                ...state,
                order: {
                    ...state.order,
                    [action.beer.id]: undefined,
                },
            };

        default:
            return state;
    }
}
