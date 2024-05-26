// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT-8N952Nlh_NLT6i25HsKhtTUn7Wf24A",
  authDomain: "bistro-boss-2c5b8.firebaseapp.com",
  projectId: "bistro-boss-2c5b8",
  storageBucket: "bistro-boss-2c5b8.appspot.com",
  messagingSenderId: "850423506834",
  appId: "1:850423506834:web:bdcc51266e1ef50654034b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
