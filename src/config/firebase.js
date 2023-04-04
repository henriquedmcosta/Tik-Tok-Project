
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyBLYFwx0_YE-aLAOQWtF9Zl6hP2LIy1YSY",
  authDomain: "tiktok---jornada-ec5b9.firebaseapp.com",
  projectId: "tiktok---jornada-ec5b9",
  storageBucket: "tiktok---jornada-ec5b9.appspot.com",
  messagingSenderId: "101574745703",
  appId: "1:101574745703:web:069462edc83bf0d4ce3ec2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;