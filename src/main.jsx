import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

function allowNativeCopy(target) {
  return Boolean(target && typeof target.closest === "function" && target.closest("input, textarea, select"));
}

document.addEventListener("copy", (e) => {
  if (!allowNativeCopy(e.target)) e.preventDefault();
});

document.addEventListener("cut", (e) => {
  if (!allowNativeCopy(e.target)) e.preventDefault();
});

document.addEventListener("dragstart", (e) => {
  if (!allowNativeCopy(e.target)) e.preventDefault();
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
