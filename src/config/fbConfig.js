import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyB9keJqJQcp4XTQF7fmjoDJsb6XtM0_GQs",
  authDomain: "remateec2.firebaseapp.com",
  databaseURL: "https://remateec2-default-rtdb.firebaseio.com",
  projectId: "remateec2",
  storageBucket: "remateec2.appspot.com",
  messagingSenderId: "284933775195",
  appId: "1:284933775195:web:21c6ed993ccec587b5c47e"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 