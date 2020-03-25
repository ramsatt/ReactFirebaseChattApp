import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyCks_BROV1ecz1dUr-EFNznldiwQB7lGKg",
  authDomain: "chat-app-cb5d4.firebaseapp.com",
  databaseURL: "https://chat-app-cb5d4.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
