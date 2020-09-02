  import firebase from 'firebase'
  import firestore from 'firebase/firestore'


  var firebaseConfig = {
    apiKey: "AIzaSyCKaL-uNqYQ_Eyy9oRj33vCq8dkE6v_8QY",
    authDomain: "ninja-chat-da132.firebaseapp.com",
    databaseURL: "https://ninja-chat-da132.firebaseio.com",
    projectId: "ninja-chat-da132",
    storageBucket: "ninja-chat-da132.appspot.com",
    messagingSenderId: "805332671826",
    appId: "1:805332671826:web:da8d37610a31d6c9d0ae8b",
    measurementId: "G-29EYJ6VYS2"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebaseApp.firestore()