import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container" />
    </BrowserRouter>
  );
}

export default App;
