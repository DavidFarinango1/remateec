import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDaOQiVIl1oUFPhEdMIWrrB-bb2tT1F_vs",
  authDomain: "weygo-7ce1b.firebaseapp.com",
  databaseURL: "https://weygo-7ce1b.firebaseio.com",
  projectId: "weygo-7ce1b",
  storageBucket: "weygo-7ce1b.appspot.com",
  messagingSenderId: "269307451614",
  appId: "1:269307451614:web:b8735bfffa167863"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 