import firebase from "firebase/app"; /* FIREBASE NAMESPACE */
import "firebase/firestore"; /* imports DATABASE to namespace */
import "firebase/auth"; /* imports AUTH to namespace */

/* Config SDK from Firebase App */
const config = {
  apiKey: "AIzaSyD7G3t496mUEtpL1JlX19fKxcOyJdcKcvY",
  authDomain: "crwn-db-ff125.firebaseapp.com",
  databaseURL: "https://crwn-db-ff125.firebaseio.com",
  projectId: "crwn-db-ff125",
  storageBucket: "",
  messagingSenderId: "115818925846",
  appId: "1:115818925846:web:04587c1ad77ebb7139ca37"
};

/* Initialize Firebase App with project specific config variables */
firebase.initializeApp(config);

/* Configure Firebase App with Authentication and Database */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Google Authentication for Firebase
  - User SignIn with Google Account
  - Popup to select google account
*/
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
