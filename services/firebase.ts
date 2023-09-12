import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASFG3tWhM3LGY6j9iAO4Y5fobde9kkeWY",
  authDomain: "movieflix-d2afa.firebaseapp.com",
  databaseURL: "https://movieflix-d2afa-default-rtdb.firebaseio.com",
  projectId: "movieflix-d2afa",
  storageBucket: "movieflix-d2afa.appspot.com",
  messagingSenderId: "229926375830",
  appId: "1:229926375830:web:2be14d1e5e7c24a9e00db7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
