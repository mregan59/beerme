const initialState = {
    loading: false,
    beers: [],
    styles: [],
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
        case 'GET_BEER_STYLES_REQUESTED':
            return { ...state };
        case 'GET_BEER_STYLES_SUCCESS':
            return { ...state, styles: action.styles };
        case 'GET_BEER_STYLES_FAILED':
            return {
                ...state,
                error: action.errors,
            };
        case 'ADD_BEER_REQUESTED':
            return { ...state, adding: true };
        case 'ADD_BEER_SUCCESS':
            return { ...state, adding: false };
        case 'ADD_BEER_FAILED':
            return {
                ...state,
                adding: false,
                error: action.error,
            };

        default:
            return state;
    }
}
