// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCm7fZ7s7rm2SMnQ0WDdY5elBTqxo1RJgw",
  authDomain: "mindmotion-62158.firebaseapp.com",
  projectId: "mindmotion-62158",
  storageBucket: "mindmotion-62158.firebasestorage.app",
  messagingSenderId: "415125259117",
  appId: "1:415125259117:web:498bd973f85b7d89ec1064"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;