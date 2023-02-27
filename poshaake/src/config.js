
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB-m9LrsnsYpKD5s4UCxUWJV4mi9sP3WCY",
  authDomain: "gogglesignin-c1899.firebaseapp.com",
  projectId: "gogglesignin-c1899",
  storageBucket: "gogglesignin-c1899.appspot.com",
  messagingSenderId: "675935306263",
  appId: "1:675935306263:web:61a1eda5e578d81c615252",
  measurementId: "G-4YXQQV0R3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const provider= new GoogleAuthProvider()

export {auth,provider}

