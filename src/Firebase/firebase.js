import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// const config = {
//     apiKey: "AIzaSyBsFd51nIOjAQpU4MmttgZcmZfgVINj0r0",
//     authDomain: "ventasquito-ef0c3.firebaseapp.com",
//     databaseURL: "https://ventasquito-ef0c3.firebaseio.com",
//     projectId: "ventasquito-ef0c3",
//     storageBucket: "ventasquito-ef0c3.appspot.com",
//     messagingSenderId: "510782049463",
//     appId: "1:510782049463:web:6a4a3f4ec3049248"
// };
//
/* const config = {
  apiKey: "AIzaSyBcCN9KqeZqgDLRNrzHpmE8ppwstjmeoI0",
  authDomain: "ventasquito-4da99.firebaseapp.com",
  databaseURL: "https://ventasquito-4da99.firebaseio.com",
  projectId: "ventasquito-4da99",
  storageBucket: "ventasquito-4da99.appspot.com",
  messagingSenderId: "742480332892",
  appId: "1:742480332892:web:b44fd5a8f55bc0e4"
}; */

const config = {
    apiKey: "AIzaSyB8vDP0nzvOFIEsZC-lEHZYlqfOPbPtf5A",
    authDomain: "ventasquito-4da99.firebaseapp.com",
    databaseURL: "https://ventasquito-4da99.firebaseio.com",
    projectId: "ventasquito-4da99",
    storageBucket: "ventasquito-4da99.appspot.com",
    messagingSenderId: "742480332892",
   appId: "1:742480332892:web:b44fd5a8f55bc0e4"
};

class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.googleProvider = new app.auth.GoogleAuthProvider();
        this.facebookProvider = new app.auth.FacebookAuthProvider();
        this.db = app.firestore();
        this.db.settings({ timestampsInSnapshots: true });
        this.storage = app.storage()
    }
    doCreateUserWithEmailAndPassword = (email, password)=>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);
    
    doSignOut = () => this.auth.signOut();

    doSignInWithGoogle = () =>
        this.auth.signInWithPopup(this.googleProvider);

    doSignInWithFacebook = ()=>
        // this.auth.signInWithPopup(this.facebookProvider);
        this.auth.signInWithRedirect(this.facebookProvider)
    
    doSignInWithFacebookRedirect =()=>
        this.auth.getRedirectResult();

    dothisdb = ()=>
        this.db

    dothisStorage = ()=>
        this.storage

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
export default Firebase;