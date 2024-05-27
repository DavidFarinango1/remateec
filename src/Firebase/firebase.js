import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// const config = {
//     apiKey: "AIzaSyBsFd51nIOjAQpU4MmttgZcmZfgVINj0r0",
//     authDomain: "Remateec-ef0c3.firebaseapp.com",
//     databaseURL: "https://Remateec-ef0c3.firebaseio.com",
//     projectId: "Remateec-ef0c3",
//     storageBucket: "Remateec-ef0c3.appspot.com",
//     messagingSenderId: "510782049463",
//     appId: "1:510782049463:web:6a4a3f4ec3049248"
// };
//
/* const config = {
  apiKey: "AIzaSyBcCN9KqeZqgDLRNrzHpmE8ppwstjmeoI0",
  authDomain: "remateec-b7f6d.firebaseapp.com",
  databaseURL: "https://remateec-b7f6d.firebaseio.com",
  projectId: "remateec-b7f6d",
  storageBucket: "remateec-b7f6d.appspot.com",
  messagingSenderId: "742480332892",
  appId: "1:742480332892:web:b44fd5a8f55bc0e4"
}; */

const config = {
    apiKey: "AIzaSyB9keJqJQcp4XTQF7fmjoDJsb6XtM0_GQs",
  authDomain: "remateec2.firebaseapp.com",
  databaseURL: "https://remateec2-default-rtdb.firebaseio.com",
  projectId: "remateec2",
  storageBucket: "remateec2.appspot.com",
  messagingSenderId: "284933775195",
  appId: "1:284933775195:web:21c6ed993ccec587b5c47e"
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