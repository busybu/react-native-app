// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr9MwCceBgUVH0QxfhDae3LoNK-7wrsQI",
  authDomain: "react-native-8465f.firebaseapp.com",
  projectId: "react-native-8465f",
  storageBucket: "react-native-8465f.appspot.com",
  messagingSenderId: "219523241869",
  appId: "1:219523241869:web:2f6813815111e611c10fc4",
  measurementId: "G-K5WP048BS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;