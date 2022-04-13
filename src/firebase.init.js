// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwBrnVOG-V0vkvpaDB02gQd8DZiLP7ico",
  authDomain: "car-genius-52d0a.firebaseapp.com",
  projectId: "car-genius-52d0a",
  storageBucket: "car-genius-52d0a.appspot.com",
  messagingSenderId: "553919036057",
  appId: "1:553919036057:web:768bd93f6b6bdc2453d608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;