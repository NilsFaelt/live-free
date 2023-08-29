import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

//process.env bruh
const firebaseConfig = {
  apiKey: "AIzaSyD7nJL8r3ET1PzoWBRV4Mk2LhHVIvUquBs",
  authDomain: "my-ma-40b0c.firebaseapp.com",
  projectId: "my-ma-40b0c",
  storageBucket: "my-ma-40b0c.appspot.com",
  messagingSenderId: "917026419842",
  appId: "1:917026419842:web:6bf77881a6655afc07309b",
  measurementId: "G-JCL1B51D2C",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
