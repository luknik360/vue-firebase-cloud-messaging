/* eslint-disable no-console */
import firebase from "firebase/app";
import 'firebase/messaging';

var config = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>.firebaseapp.com",
  databaseURL: "https://<YOUR-DB-URL>.firebaseio.com",
  projectId: "<YOUR-PROJECT-ID>",
  storageBucket: "<YOUR-STORAGE-BUCKET>",
  messagingSenderId: "<YOUR-MESSAGING-SENDER-ID>"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.usePublicVapidKey('<YOUR-PUBLIC-KEY>');

messaging.requestPermission().then(() => {
  messaging.getToken().then(token => {
    console.log('Token: ' + token);
  })
})

messaging.onMessage(function(payload) {
  console.log('Message received. ', payload);
});