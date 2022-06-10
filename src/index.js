import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3UvSZ9yUGkKyVNCPbDyd3pfW9lQbFR4M",
  authDomain: "e-commerce-coder-react-31170.firebaseapp.com",
  projectId: "e-commerce-coder-react-31170",
  storageBucket: "e-commerce-coder-react-31170.appspot.com",
  messagingSenderId: "887729072934",
  appId: "1:887729072934:web:a6d5d026a4d88ed3652fe7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
