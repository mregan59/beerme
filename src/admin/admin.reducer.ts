const initialState = {
    loading: false,
    beers: [],
};

export function adminReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case 'GET_BEERS_REQUESTED':
            console.log('BEERS REQUESTED');
            return { ...state, loading: true };
        case 'GET_BEERS_SUCCESS':
            console.log('BEERS SUCCESS');
            return { ...state, loading: false, beers: action.payload.beers };
        case 'GET_BEERS_FAILED':
            console.log('BEERS FAILED');
            return {
                ...state,
                loading: false,
                error: action.errors,
            };
        default:
            return state;
    }
}
