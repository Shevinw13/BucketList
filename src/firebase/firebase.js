import firebase from 'firebase/app';
import 'firebase/auth';

// Use actual config values from registered firbase app
var config = {
  apiKey: "AIzaSyCDA5g52E9Eev-PmWBwFVdjOFbfgu6Wfi8",
  authDomain: "practiceauth-90f38.firebaseapp.com",
  databaseURL: "https://practiceauth-90f38.firebaseio.com",
  projectId: "practiceauth-90f38",
  storageBucket: "practiceauth-90f38.appspot.com",
  messagingSenderId:  "777660301429"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };