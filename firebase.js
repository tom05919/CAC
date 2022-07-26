import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyC4kNGQe3zgArEParC9IJXyVM6v3QQLbhc",
  authDomain: "congressional-app-projec-4e3d9.firebaseapp.com",
  projectId: "congressional-app-projec-4e3d9",
  storageBucket: "congressional-app-projec-4e3d9.appspot.com",
  messagingSenderId: "335680049951",
  appId: "1:335680049951:web:9f1eca0888821659af962a",
  measurementId: "G-QEZTWY5TF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
