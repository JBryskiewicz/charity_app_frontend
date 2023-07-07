import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCxGXTypifsj_Ixz4zFN8niGT6pYzE-sIE",
    authDomain: "charity-app-frontend.firebaseapp.com",
    projectId: "charity-app-frontend",
    storageBucket: "charity-app-frontend.appspot.com",
    messagingSenderId: "969011570640",
    appId: "1:969011570640:web:31fc8bcccc2ad85bcd3bd5"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
