import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from 'firebase/firestore';

import { CartProvider } from "./context/cartContext";


// Configuracion de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDAxazOes7vKOm4Arm8-CGMoL4oP2eLXN0",
  authDomain: "expassio33-c0ec3.firebaseapp.com",
  projectId: "expassio33-c0ec3",
  storageBucket: "expassio33-c0ec3.firebasestorage.app",
  messagingSenderId: "338817661665",
  appId: "1:338817661665:web:7229795291e917aec755a0"
};

// Inicializacion de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <CartProvider>
      <App />
    </CartProvider>

  </StrictMode>,
)

