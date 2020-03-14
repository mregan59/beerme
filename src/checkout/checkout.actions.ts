import firebase from 'firebase';
import '@firebase/firestore';

export const addBeerToOrder = (beer, quantity) => async dispatch => {
    dispatch(addBeerToOrderAction(beer, quantity));
};

const addBeerToOrderAction = (beer, quantity) => {
    return {
        type: 'ADD_BEER_TO_ORDER',
        beer,
        quantity,
    };
};

export const removeBeerFromOrder = beer => async dispatch => {
    dispatch(removeBeerFromOrderAction(beer));
};

const removeBeerFromOrderAction = beer => {
    return {
        type: 'REMOVE_BEER_FROM_ORDER',
        beer,
    };
};
