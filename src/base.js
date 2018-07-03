import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAxZVJT0aBa1q4XW27aJLo42hm5-diMTPE",
  authDomain: "buzzr-e95fd.firebaseapp.com",
  databaseURL: "https://buzzr-e95fd.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
