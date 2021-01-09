import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDNrGN8QXw1qcpwGEOATIyJiXszMOHSrsQ",
    authDomain: "instagram-clone-ab91b.firebaseapp.com",
    databaseURL: "https://instagram-clone-ab91b.firebaseio.com",
    projectId: "instagram-clone-ab91b",
    storageBucket: "instagram-clone-ab91b.appspot.com",
    messagingSenderId: "931467173802",
    appId: "1:931467173802:web:badf39c972fa3d48ad95d3",
    measurementId: "G-4ZKV3YLLE1"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage} ;
