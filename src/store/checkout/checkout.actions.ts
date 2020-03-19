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

export const clearOrder = () => async dispatch => {
    dispatch(clearOrderAction());
};

const clearOrderAction = () => {
    return {
        type: 'CLEAR_ORDER',
    };
};

export const confirmOrder = order => async dispatch => {
    const ordersRef = firebase.firestore().collection('orders');
    dispatch(confirmOrderRequested());

    ordersRef
        .add(order)
        .then(() => {
            dispatch(confirmOrderSuccess(order));
        })
        .catch(function(error) {
            dispatch(confirmOrderFailed(error));
        });
};

function confirmOrderRequested() {
    return {
        type: 'CONFIRM_ORDER_REQUESTED',
    };
}

function confirmOrderSuccess(order) {
    return {
        type: 'CONFIRM_ORDER_SUCCESS',
        order,
    };
}

function confirmOrderFailed(error) {
    return {
        type: 'CONFIRM_ORDER_FAILED',
        error,
    };
}
