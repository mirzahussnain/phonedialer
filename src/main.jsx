import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DialerProvider from './context/store.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DialerProvider>
      <App />
    </DialerProvider>
  </React.StrictMode>
);
