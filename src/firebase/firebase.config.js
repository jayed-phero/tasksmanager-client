// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALQsKIwjP6nYfBx-TmvHHZubfjm_ZftCo",
  authDomain: "tasksmanager-68c2d.firebaseapp.com",
  projectId: "tasksmanager-68c2d",
  storageBucket: "tasksmanager-68c2d.appspot.com",
  messagingSenderId: "23716339602",
  appId: "1:23716339602:web:52dbd0c63e51fc70026b4b",
  measurementId: "G-XS2M4DKJS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;