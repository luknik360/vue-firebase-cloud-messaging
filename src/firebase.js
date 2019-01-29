/* eslint-disable no-console */
import firebase from "firebase/app";
import 'firebase/messaging';

var config = {
  apiKey: "AIzaSyBwJiiGEPL0GEaIQ2LY9XHNgGVV3OZhZ7U",
  authDomain: "pwa-test-766e2.firebaseapp.com",
  databaseURL: "https://pwa-test-766e2.firebaseio.com",
  projectId: "pwa-test-766e2",
  storageBucket: "pwa-test-766e2.appspot.com",
  messagingSenderId: "829123798526"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.usePublicVapidKey('BCsjNcc5gR-hDeBPNYIydzPpfzP9mUKsnKBJ94kVniq6-OuX57mYsnelh3wZXKHWx-GYwe340PzHDn2RN-qAp70');

messaging.requestPermission().then(() => {
  messaging.getToken().then(token => {
    console.log('Token: ' + token);
  })
})

messaging.onMessage(function(payload) {
  console.log('Message received. ', payload);
});