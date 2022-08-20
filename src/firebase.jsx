// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqE1IfIaEDOiKTpLFuysLxob6GHGJqBQY",
  authDomain: "react-chatapp-47037.firebaseapp.com",
  databaseURL: 'http://react-chatapp-47037.firebaseio.com', 
  projectId: "react-chatapp-47037",
  storageBucket: "react-chatapp-47037.appspot.com",
  messagingSenderId: "416280779498",
  appId: "1:416280779498:web:5daacec5b3da51d9065593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);