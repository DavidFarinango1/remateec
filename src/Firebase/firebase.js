import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBsFd51nIOjAQpU4MmttgZcmZfgVINj0r0",
    authDomain: "ventasquito-ef0c3.firebaseapp.com",
    databaseURL: "https://ventasquito-ef0c3.firebaseio.com",
    projectId: "ventasquito-ef0c3",
    storageBucket: "ventasquito-ef0c3.appspot.com",
    messagingSenderId: "510782049463",
    appId: "1:510782049463:web:6a4a3f4ec3049248"
};
// const config = {
//     apiKey: "AIzaSyDaOQiVIl1oUFPhEdMIWrrB-bb2tT1F_vs",
//     authDomain: "weygo-7ce1b.firebaseapp.com",
//     databaseURL: "https://weygo-7ce1b.firebaseio.com",
//     projectId: "weygo-7ce1b",
//     storageBucket: "weygo-7ce1b.appspot.com",
//     messagingSenderId: "269307451614",
//     appId: "1:269307451614:web:b8735bfffa167863"
// };

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
        this.auth.signInWithPopup(this.facebookProvider);

    dothisdb = ()=>
        this.db

    dothisStorage = ()=>
        this.storage

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
export default Firebase;