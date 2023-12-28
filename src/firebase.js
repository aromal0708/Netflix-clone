import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbtt-9FgfAMcbNq25wVAnTGq5RITKE3CA",
  authDomain: "netflix-clone-ccb6d.firebaseapp.com",
  projectId: "netflix-clone-ccb6d",
  storageBucket: "netflix-clone-ccb6d.appspot.com",
  messagingSenderId: "381802036257",
  appId: "1:381802036257:web:9ee8decce964414af0b760",
  measurementId: "G-3NTY3YZ01G",
};

//Firebase Initialization
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);