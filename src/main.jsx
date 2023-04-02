import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { BrowserRouter} from "react-router-dom";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB6OfiAS2xLlTqUQnin2ulpO33OPBg-rHk",
  authDomain: "my-ecommerce-firebase.firebaseapp.com",
  projectId: "my-ecommerce-firebase",
  storageBucket: "my-ecommerce-firebase.appspot.com",
  messagingSenderId: "537060162507",
  appId: "1:537060162507:web:b90b0e67677d19a7a9944e"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
