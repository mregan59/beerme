const functions = require('firebase-functions');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp();

exports.onItemCreation = functions.firestore
    .document('beers/{beerId}')
    .onCreate(async (snapshot, context) => {
        const itemDataSnap = await snapshot.ref.get();
        return admin
            .firestore()
            .collection('mail')
            .add({
                to: 'mregan59@gmail.com',
                message: {
                    subject: 'Your reservation is here !',
                    html:
                        'Hey ' +
                        itemDataSnap.data().name +
                        '. This is your reservation for the event and it costs $' +
                        itemDataSnap.data().quantity +
                        ', thanks for the purchase.',
                },
            })
            .then(() => console.log('Queued email for delivery!'));
    });
