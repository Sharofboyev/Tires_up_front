import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SelectTableComponent from "./select-table.component";

export default function App() {
  return (
    <div className="container">
      <h1>React Table with Rows Selection Single/ Multiple : FeakyJolly.com</h1>

      <SelectTableComponent />
    </div>
  );
}