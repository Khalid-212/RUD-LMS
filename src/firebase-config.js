import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAqoLu-4hbpJb324CCg8nZHCLrhvX3L-dw",
  authDomain: "rud-lms.firebaseapp.com",
  projectId: "rud-lms",
  storageBucket: "rud-lms.appspot.com",
  messagingSenderId: "1048711690123",
  appId: "1:1048711690123:web:b5836ed705495c5df1a18e",
  measurementId: "G-6X4HCEZ91X",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
