import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdwJaCWfFV5uVXZPh7OvgeTVGpWf7SgA0",
  authDomain: "react-notes-f2d33.firebaseapp.com",
  projectId: "react-notes-f2d33",
  storageBucket: "react-notes-f2d33.appspot.com",
  messagingSenderId: "145123610611",
  appId: "1:145123610611:web:0e6c14f71fb54116fc0c86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")