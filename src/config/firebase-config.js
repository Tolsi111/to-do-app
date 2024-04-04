import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCW3zQje8zjeA3cEtdfBtGKjtp_eQ7ySYY",
    authDomain: "to-do-app-619a8.firebaseapp.com",
    projectId: "to-do-app-619a8",
    storageBucket: "to-do-app-619a8.appspot.com",
    messagingSenderId: "700769702998",
    appId: "1:700769702998:web:7b7ae82183c2693b4c97f7",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;
