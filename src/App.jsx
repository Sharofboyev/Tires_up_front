import React from "react";
import Table from "./components/TableData/Table";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminPanel from "./components/Admin/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AdminPanel></AdminPanel>}
        />
        <Route
          path="/tiresecond"
          element={<Table />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
