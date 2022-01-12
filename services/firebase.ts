import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";

let app: FirebaseApp;
const firebaseConfig = {
  apiKey: "AIzaSyASFG3tWhM3LGY6j9iAO4Y5fobde9kkeWY",
  authDomain: "movieflix-d2afa.firebaseapp.com",
  projectId: "movieflix-d2afa",
  storageBucket: "movieflix-d2afa.appspot.com",
  messagingSenderId: "229926375830",
  appId: "1:229926375830:web:2be14d1e5e7c24a9e00db7",
};
if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}
export default app;
