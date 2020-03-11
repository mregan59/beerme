const initialState = {
    loading: false,
    beers: [],
};

export function beerReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_BEERS_REQUESTED':
            return { ...state, loading: true };
        case 'GET_BEERS_SUCCESS':
            return { ...state, loading: false, beers: action.beers };
        case 'GET_BEERS_FAILED':
            return {
                ...state,
                loading: false,
                error: action.errors,
            };
        default:
            return state;
    }
}
