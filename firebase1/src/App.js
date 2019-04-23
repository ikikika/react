import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container" />
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
