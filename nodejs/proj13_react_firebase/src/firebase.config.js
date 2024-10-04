// import { initializeApp, auth, firestore, storage } from "firebase/app";
import { initializeApp, auth, firestore, storage } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk_-3Mry5vlfVFdAovWXpfjsKh3RF-Tl8",
    authDomain: "nam2024-372b0.firebaseapp.com",
    projectId: "nam2024-372b0",
    storageBucket: "nam2024-372b0.appspot.com",
    messagingSenderId: "417988875626",
    appId: "1:417988875626:web:a4a825c8ba8b8c2bd1c113"
};

initializeApp(firebaseConfig);

export const authService = auth();
export const dbService = firestore();
export const storageService = storage();