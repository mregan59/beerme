import firebase from 'firebase';
import '@firebase/firestore';

export const getBeers = () => async dispatch => {
    const beersRef = firebase.firestore().collection('beers');
    dispatch(getBeersRequested());

    beersRef
        .get()
        // .then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         // doc.data() is never undefined for query doc snapshots
        //         console.log(doc.id, ' => ', doc.data());
        //     });
        // });
        .then(querySnapshot => {
            //console.log('querySnapshot');
            // console.log(querySnapshot);
            const beers = [];
            querySnapshot.forEach(doc => {
                // console.log('doc');
                //console.log(doc);
                const { name, description, price, quantity } = doc.data();
                beers.push({
                    id: doc.id,
                    name,
                    description,
                    price,
                    quantity,
                });
            });
            console.log(beers);
            getBeersSuccess(beers);
        })
        .catch(function(error) {
            getBeersFailed(error);
        });
};

function getBeersRequested() {
    return {
        type: 'GET_BEERS_REQUESTED',
    };
}

function getBeersSuccess(payload) {
    console.log('here');
    console.log(payload);
    return {
        type: 'GET_BEERS_SUCCESS',
        payload,
    };
}

function getBeersFailed(error) {
    return {
        type: 'GET_BEERS_FAILED',
        error,
    };
}
