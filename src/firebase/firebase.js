import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyByl-JRyr5mYPG22cvjIj3q6--L6t2q2oQ",
  authDomain: "pizza-app-4221e.firebaseapp.com",
  databaseURL: "https://pizza-app-4221e.firebaseio.com",
  projectId: "pizza-app-4221e",
  storageBucket: "pizza-app-4221e.appspot.com",
  messagingSenderId: "1058783385184",
  appId: "1:1058783385184:web:d008b8f0f039b9d67d1505",
  measurementId: "G-9PJJ0VTFHQ"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database