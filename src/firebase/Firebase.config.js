// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAREhPigfNmi_yU4VUCjpKj7JkjC_QP8Wc",
  authDomain: "the-news-dragon-ea5b8.firebaseapp.com",
  projectId: "the-news-dragon-ea5b8",
  storageBucket: "the-news-dragon-ea5b8.appspot.com",
  messagingSenderId: "970524487989",
  appId: "1:970524487989:web:b0570e8a7dc62afac0dc7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app