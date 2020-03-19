import firebase from 'firebase';
import '@firebase/firestore';

export const getBeers = () => async dispatch => {
    const beersRef = firebase.firestore().collection('beers');
    dispatch(getBeersRequested());

    beersRef
        .get()
        .then(querySnapshot => {
            const beers = [];
            querySnapshot.forEach(doc => {
                const { name, description, price, quantity } = doc.data();
                beers.push({
                    id: doc.id,
                    name,
                    description,
                    price,
                    quantity,
                });
            });
            dispatch(getBeersSuccess(beers));
        })
        .catch(function(error) {
            dispatch(getBeersFailed(error));
        });
};

function getBeersRequested() {
    return {
        type: 'GET_BEERS_REQUESTED',
    };
}

function getBeersSuccess(beers) {
    return {
        type: 'GET_BEERS_SUCCESS',
        beers,
    };
}

function getBeersFailed(error) {
    return {
        type: 'GET_BEERS_FAILED',
        error,
    };
}

export const addBeer = beer => async dispatch => {
    const beersRef = firebase.firestore().collection('beers');
    dispatch(addBeerRequested());

    beersRef;
    beersRef
        .add(beer)
        .then(() => {
            dispatch(addBeerSuccess());
        })
        .catch(function(error) {
            dispatch(addBeerFailed(error));
        });
};

function addBeerRequested() {
    return {
        type: 'ADD_BEER_REQUESTED',
    };
}

function addBeerSuccess() {
    return {
        type: 'ADD_BEER_SUCCESS',
    };
}

function addBeerFailed(error) {
    return {
        type: 'ADD_BEER_FAILED',
        error,
    };
}
