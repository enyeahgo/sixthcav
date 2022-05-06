importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging.js');
var firebaseConfig = {
  apiKey: "AIzaSyB1CzIfFtTvnVNS2JTJzv4NCGGiQwpAHu8",
  authDomain: "sixthcav.firebaseapp.com",
  databaseURL: "https://sixthcav-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sixthcav",
  storageBucket: "sixthcav.appspot.com",
  messagingSenderId: "518529957907",
  appId: "1:518529957907:web:ed171c2024750395337fe6",
  measurementId: "G-H641BN2ZFM"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = "TayaPh";
  const notificationOptions = {
    body: "You have a new important notification in SixthCav",
    click_action: "https://sixthcav.web.app"
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});