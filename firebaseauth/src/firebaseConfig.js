import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
const firebaseInit = firebase.initializeApp(firebaseConfig);

export default firebaseInit;
