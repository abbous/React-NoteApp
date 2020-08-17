import firebase from "firebase";
const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyCeuI5U7NymkTlrCYq_9GNJfQ9LMA2hv1o",
  authDomain: "todo-app-cp-47720.firebaseapp.com",
  databaseURL: "https://todo-app-cp-47720.firebaseio.com",
  projectId: "todo-app-cp-47720",
  storageBucket: "todo-app-cp-47720.appspot.com",
  messagingSenderId: "768682516856",
  appId: "1:768682516856:web:39fb688839526c09a6e88d",
  measurementId: "G-ES4XX7CDK2",
});

const db = firebase.firestore();
export default db;
