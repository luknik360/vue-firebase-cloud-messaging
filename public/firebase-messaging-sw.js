/* eslint-disable no-undef */
/* eslint-disable no-console */
importScripts('https://www.gstatic.com/firebasejs/5.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.1/firebase-messaging.js');

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

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Received background message ', payload);

  var notification = payload.notification
  var notificationTitle = notification.title;
  var notificationOptions = {
    body: notification.body,
    icon: '/static/images/logo.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});