import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAEd_YqlGouvdR5ILMdyAovB52Rei0PmRU",
  authDomain: "lista-tareas-bfbb2.firebaseapp.com",
  projectId: "lista-tareas-bfbb2",
  storageBucket: "lista-tareas-bfbb2.appspot.com",
  messagingSenderId: "711309395671",
  appId: "1:711309395671:web:3271a86971d5a7cfa65292",
  measurementId: "G-C5Z88F09X4"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
