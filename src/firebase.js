
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmiZoqNO_wP1BgkOVaQOccR2iNDgyXwK4",
  authDomain: "aman-portfolio-5eaf0.firebaseapp.com",
  projectId: "aman-portfolio-5eaf0",
  storageBucket: "aman-portfolio-5eaf0.appspot.com",
  messagingSenderId: "520681255301",
  appId: "1:520681255301:web:abf5b4e9b2dac6951014ec"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore();