// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9gUEcdZ-6y13CWCbUpIihOOE7OWUzFBo",
  authDomain: "my-chat-app-c898c.firebaseapp.com",
  projectId: "my-chat-app-c898c",
  storageBucket: "my-chat-app-c898c.appspot.com",
  messagingSenderId: "632695752367",
  appId: "1:632695752367:web:3d2d06ee14ab78d2bd365a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)