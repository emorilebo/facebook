import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpTRcD6J6Ao7L9XKCjaEjNqza0uEXuAqs",
  authDomain: "facebook-d0439.firebaseapp.com",
  projectId: "facebook-d0439",
  storageBucket: "facebook-d0439.appspot.com",
  messagingSenderId: "19276182060",
  appId: "1:19276182060:web:e6ea04bd714b23a9545789",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
