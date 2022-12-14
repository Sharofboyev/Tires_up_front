import React, { StrictMode } from "react";
import reactDom from "react-dom/client";
// Import React Table
import App from "./App";
import "mdb-ui-kit/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
const root = reactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
