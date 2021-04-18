var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/amanullah/Documents/flutter_projects/fcm_notifications/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

async function start() {
    var topics = [];
    const col = await db.collection('topics').get();
    col.forEach((doc) => {
        topics.push(doc.id);
    })

    console.log(topics)
    var message = {
        notification: {
            title: '850',
            body: '2:45'
        },
        // token: registrationToken
    };

    admin.messaging().sendToDevice(topics, message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
}

start()


// Send a message to the device corresponding to the provided
// registration token.
