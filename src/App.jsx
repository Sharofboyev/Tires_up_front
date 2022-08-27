import React from "react";
import Table from "./components/Table";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Home></Home>}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/tiresecond"
          element={<Table />}
        />
        <Route
          path="/drop"
          element={<h1>Drop</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h2>Main page</h2>
    </div>
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
