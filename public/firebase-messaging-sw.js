/* eslint-disable no-undef */
/* eslint-disable no-console */
importScripts('https://www.gstatic.com/firebasejs/5.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.1/firebase-messaging.js');

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