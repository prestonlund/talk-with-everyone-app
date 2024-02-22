import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFnLu6fnFxKgmvuMMJmQ1I60ago0guzCc",
    authDomain: "calling-tree-app.firebaseapp.com",
    projectId: "calling-tree-app",
    storageBucket: "calling-tree-app.appspot.com",
    messagingSenderId: "978467268102",
    appId: "1:978467268102:web:94f46b67ac00bbc055c587",
    measurementId: "G-6WJY59DT77"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app)

export { db, auth, functions }