import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyAQQnBUxEYj8ew_SecAV5iGmRCRW2GYyKw",
        authDomain: "carana-b13a1.firebaseapp.com",
        projectId: "carana-b13a1",
        storageBucket: "carana-b13a1.appspot.com",
        messagingSenderId: "562740325798",
        appId: "1:562740325798:web:0b4097ee3fb6a1c720b367"
    }
);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}