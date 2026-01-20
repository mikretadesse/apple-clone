// src/main.jsx

import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import global CSS (optional, but recommended)
import "./asset/css/styles.css"; // Import your main CSS file

// Create root and render the App component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
