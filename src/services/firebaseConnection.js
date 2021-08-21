import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyC8pAOJGL1ByLk6kPWPuBdKOvt5CgXY4EA",
  authDomain: "sistema-chamada-62801.firebaseapp.com",
  projectId: "sistema-chamada-62801",
  storageBucket: "sistema-chamada-62801.appspot.com",
  messagingSenderId: "651380391567",
  appId: "1:651380391567:web:29e87b5dfc2bb5b51a7afa",
  measurementId: "G-58NR53MB42"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

export default firebase;