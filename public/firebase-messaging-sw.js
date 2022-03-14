importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');
var firebaseConfig = {
  apiKey: "AIzaSyCQ4zInvNZYWQsDQAUBttx8hqpW9Z6Fd68",
  authDomain: "tayaph.firebaseapp.com",
  databaseURL: "https://tayaph-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tayaph",
  storageBucket: "tayaph.appspot.com",
  messagingSenderId: "1036036432312",
  appId: "1:1036036432312:web:17776cd4e0c00a1fc3af4d",
  measurementId: "G-BB64DNC58K"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = "TayaPh";
  const notificationOptions = {
    body: "You have a new important notification in TayaPh",
    click_action: "https://tayaph.web.app"
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});