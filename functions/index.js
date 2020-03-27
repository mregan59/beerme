const functions = require('firebase-functions');
const moment = require('moment');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp();

exports.onItemCreation = functions.firestore
    .document('orders/{orderId}')
    .onCreate(async (snapshot, context) => {
        const itemDataSnap = await snapshot.ref.get();
        const data = itemDataSnap.data();
        console.log(data);
        const beers = Object.keys(data.beers)
            .map(key => {
                const beer = data.beers[key];
                return `<br/><br/>${
                    beer.name
                }......................$${beer.checkoutQuantity *
                    beer.price}<br/>${beer.quantity} at $${beer.price}/keg`;
            })
            .join('');

        return admin
            .firestore()
            .collection('mail')
            .add({
                to: 'mregan59@gmail.com',
                message: {
                    subject: 'You received an order!',
                    html:
                        'You received an order from ' +
                        data.brewery +
                        '.' +
                        beers +
                        '<br/><br/> The total is $' +
                        data.total +
                        ' to be delivered on ' +
                        moment(data.delivery_date).format('MMM DD, YYYY') +
                        '.',
                },
            })
            .then(() => console.log('Queued email for delivery!'));
    });
