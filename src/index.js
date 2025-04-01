import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import BrideGallery from "./BrideGallery"; // Ensure this file exists
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bride-gallery" element={<BrideGallery />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
