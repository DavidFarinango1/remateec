import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyB8vDP0nzvOFIEsZC-lEHZYlqfOPbPtf5A",
    authDomain: "ventasquito-4da99.firebaseapp.com",
    databaseURL: "https://ventasquito-4da99.firebaseio.com",
    projectId: "ventasquito-4da99",
    storageBucket: "ventasquito-4da99.appspot.com",
    messagingSenderId: "742480332892",
    appId: "1:742480332892:web:b44fd5a8f55bc0e4"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 