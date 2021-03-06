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

/* Stores Users to firestore library 
  - Using the userAuth object from Firebase auth library
  - Adds any additionalData that we may use
*/
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // If no userAuth object, then exits the function
  if (!userAuth) return;

  /* Gets user from the database and gives us a snapshot of the user collection object */
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  /* If user does NOT exist (collection object has a property called exists), create user. Else raise an error */
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  /* Return user reference object for use later on  */
  return userRef;
};

/*
Stores SHOP DATA to Database
*/
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  /* Creates collection where the name of the collection is the 'key' */
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  /* Set data to database */
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    /* Creates a new Document reference with unique ID */
    const newDocRef = collectionRef.doc();
    /* Set new Document reference with the object passed */
    batch.set(newDocRef, obj);
  });

  /* Executes batch call */
  return await batch.commit();
};

/*
Formats the Shop Data collection obtained from Firebase to our needs
*/
export const convertCollectionsSnapshotToMap = collections => {
  /* Formats the data from Firebase to an array with the appropriate 'keys' */
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  /* Creates an object map from the array */
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

/* 
Mimicking User from a Backend Database
Resolves user and returns current user or null in a promise based pattern
Handles errors with the reject call
*/
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsuscribe = auth.onAuthStateChanged(userAuth => {
      unsuscribe();
      resolve(userAuth);
    }, reject);
  });
};

/* Configure Firebase App with Authentication and Database */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Google Authentication for Firebase
  - User SignIn with Google Account
  - Popup to select google account
*/
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider);
};

export default firebase;
