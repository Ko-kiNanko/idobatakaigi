import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCq3gU3EhC25RF_8RpmPvz5DAUtGlUOT6Q",
  authDomain: "idobatakaigi-with-ham-80e4b.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-80e4b",
  storageBucket: "idobatakaigi-with-ham-80e4b.appspot.com",
  messagingSenderId: "1007112162669",
  appId: "1:1007112162669:web:58f8098ba90d475f42de64"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
}