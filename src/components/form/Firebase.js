import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBnab-Hop3P4Li4FyXl7csxdPRStVddZ7c",
  authDomain: "bbk-react-project-contact-form.firebaseapp.com",
  projectId: "bbk-react-project-contact-form",
  storageBucket: "bbk-react-project-contact-form.appspot.com",
  messagingSenderId: "872362179849",
  appId: "1:872362179849:web:f3f2e62e458821388f67d8",
});

var db = firebaseApp.firestore();

export { db };
