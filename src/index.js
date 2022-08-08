import React, { StrictMode } from "react";
import reactDom from "react-dom/client";
import "./index.css";
// Import React Table
import App from "./App";

const root = reactDom.createRoot(document.getElementById("root"))
root.render(<StrictMode><App /></StrictMode>);
