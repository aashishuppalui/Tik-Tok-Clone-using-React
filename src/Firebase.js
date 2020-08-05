import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHAAJ90zGd7QjwBw0kHsVabaXrSDIu-BY",
  authDomain: "tik-tok-clone-958ff.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-958ff.firebaseio.com",
  projectId: "tik-tok-clone-958ff",
  storageBucket: "tik-tok-clone-958ff.appspot.com",
  messagingSenderId: "961148737761",
  appId: "1:961148737761:web:fe9a05bf57cdbf938fffa0",
  measurementId: "G-JXVRE7MZRM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
