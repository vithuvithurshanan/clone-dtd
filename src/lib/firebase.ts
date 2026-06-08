import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYHc9UsuDz0_h6GrS8eWaax_MNkQkBZNg",
  authDomain: "ak-wiring.firebaseapp.com",
  projectId: "ak-wiring",
  storageBucket: "ak-wiring.firebasestorage.app",
  messagingSenderId: "251980918493",
  appId: "1:251980918493:web:9e57ddfd0f2c1a966cf534",
  measurementId: "G-85EY09RH8Z",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
