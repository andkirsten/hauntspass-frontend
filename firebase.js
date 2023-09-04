import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxvpBt4yhyDp14Wwc4xdhPv-EBPkU1W1s",
  authDomain: "haunts-pass.firebaseapp.com",
  projectId: "haunts-pass",
  storageBucket: "haunts-pass.appspot.com",
  messagingSenderId: "615843226850",
  appId: "1:615843226850:web:14441e1a9635deee51eabb",
  measurementId: "G-HGK7931SC3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
