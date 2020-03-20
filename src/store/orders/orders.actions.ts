import firebase from 'firebase';
import '@firebase/firestore';

export const getOrders = () => async dispatch => {
    const ordersRef = firebase.firestore().collection('orders');
    dispatch(getOrdersRequested());

    ordersRef
        .get()
        .then(querySnapshot => {
            const orders = [];
            querySnapshot.forEach(doc => {
                const { beers, brewery, delivery_date, total } = doc.data();
                orders.push({
                    id: doc.id,
                    beers,
                    brewery,
                    delivery_date,
                    total,
                });
            });
            dispatch(getOrdersSuccess(orders));
        })
        .catch(function(error) {
            dispatch(getOrdersFailed(error));
        });
};

function getOrdersRequested() {
    return {
        type: 'GET_ORDERS_REQUESTED',
    };
}

function getOrdersSuccess(orders) {
    return {
        type: 'GET_ORDERS_SUCCESS',
        orders,
    };
}

function getOrdersFailed(error) {
    return {
        type: 'GET_ORDERS_FAILED',
        error,
    };
}
