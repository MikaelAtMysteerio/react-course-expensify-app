import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCleNBMRcNbzbySHWtPo0RCbIBjlzjis1Y",
  authDomain: "expensify-86a67.firebaseapp.com",
  databaseURL: "https://expensify-86a67.firebaseio.com",
  projectId: "expensify-86a67",
  storageBucket: "expensify-86a67.appspot.com",
  messagingSenderId: "652742733624",
  appId: "1:652742733624:web:68924f9e41b8ff07"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider , database as default};
