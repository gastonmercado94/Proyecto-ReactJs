import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyC0r2nidqM0ARWbGv_YJ9DlZaK5xoGbSSU",
    authDomain: "winery-15f11.firebaseapp.com",
    projectId: "winery-15f11",
    storageBucket: "winery-15f11.appspot.com",
    messagingSenderId: "947106213197",
    appId: "1:947106213197:web:7a6de0c8ed935882b49b04"
  })

  export function getFirebase(){
      return app;
  }

  export function getFirestore(){
      return firebase.firestore(app);
  }