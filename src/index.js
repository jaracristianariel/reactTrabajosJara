import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCT0iIyxmnxP4trMbLLFB66xZj-WDv5Ko",
  authDomain: "primera-7121e.firebaseapp.com",
  projectId: "primera-7121e",
  storageBucket: "primera-7121e.appspot.com",
  messagingSenderId: "148238297713",
  appId: "1:148238297713:web:6e9c3ed31e92093c57c9d0"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

