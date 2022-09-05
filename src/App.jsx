import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import { columns, getData } from "./utils/Util";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={<AdminPanel></AdminPanel>}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/tiresecond"
          element={
            <Table
              columns={columns}
              items={items}
            />
          }
        />
        <Route
          path="/drop"
          element={<h1>Drop</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
