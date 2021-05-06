const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./key/serviceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.createUserInFirestore = functions.auth.user().onCreate( (user) => {
  // const userDetails = user.providerData[0];
  // delete userDetails.uid;
  // userDetails.uid = user.uid;
  admin.firestore().collection('Users').doc(user.uid).set({uid: user.uid, email: user.email, creationTime: user.metadata.creationTime})
    .then((r) => console.log(r))
    .catch(e => console.log(e));
})

exports.createCollection = functions.firestore.document(`test/{blabla}`).onCreate(async (snap,context) => {
  console.log(snap)
  console.log(context);
  console.log("DOC ID: " + JSON.stringify(context.params.blabla));

  try {
    const doc = await admin.firestore().collection('Cloud').doc(context.params.blabla).set(snap.data())
    console.log(doc);
  } catch (e) {
    console.log('ERROR: ' + e.message)
  }
})

exports.multiNumber = functions.https.onCall((data) => {
  return data.number * 2
})

