import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCU9CTPBesD6VwWNU-F6ArnTynzN653S_c",
    authDomain: "study-motivation-app.firebaseapp.com",
    databaseURL: "https://study-motivation-app.firebaseio.com",
    projectId: "study-motivation-app",
    storageBucket: "study-motivation-app.appspot.com",
    messagingSenderId: "992061611156",
    appId: "1:992061611156:web:36fcd156bc0718c7ad2881",
    measurementId: "G-0YE7F65GZT"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  export const db = firebaseApp.firestore();