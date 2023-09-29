// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyA-9d4qZ_CkCcOD6RwsVFOtC9RkblLYJD0",
//   authDomain: "mortgage-1a2c0.firebaseapp.com",
//   projectId: "mortgage-1a2c0",
//   storageBucket: "mortgage-1a2c0.appspot.com",
//   messagingSenderId: "882362654582",
//   appId: "1:882362654582:web:6dc7f3d5b241b6c2352457"

  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;