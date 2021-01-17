import firebase from "firebase/app";
import "firebase/database";

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC39ynb4f8SXzUMLniQmWo7TCZXCQUaOgo",
  authDomain: "lampa-test-ivanyuk.firebaseapp.com",
  databaseURL: "https://lampa-test-ivanyuk-default-rtdb.firebaseio.com",
  projectId: "lampa-test-ivanyuk",
  storageBucket: "lampa-test-ivanyuk.appspot.com",
  messagingSenderId: "258682313552",
  appId: "1:258682313552:web:9c52b733087aa245f9aa55",
  measurementId: "G-J1E66XWPRK",
};

firebase.initializeApp(FIREBASE_CONFIG);

export const FIREBASE_DB = firebase.database();

export const STORAGE_URL =
  "https://firebasestorage.googleapis.com/v0/b/lampa-test-ivanyuk.appspot.com/o/";

export const STORAGE_TOKEN = "65a20e7f-e979-44a1-8f44-e4580a56bfee";
