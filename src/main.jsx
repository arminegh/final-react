import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAxazOes7vKOm4Arm8-CGMoL4oP2eLXN0",
  authDomain: "expassio33-c0ec3.firebaseapp.com",
  projectId: "expassio33-c0ec3",
  storageBucket: "expassio33-c0ec3.firebasestorage.app",
  messagingSenderId: "338817661665",
  appId: "1:338817661665:web:7229795291e917aec755a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getItems() {
  const querySnapshot = await getDocs(collection(db, "items"));
  querySnapshot.forEach(doc => console.log(`${doc.id} => ${doc.data().tittle}`))
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
