import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/Navbar";
import Todos from "./components/todo/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Post from "./components/pages/Post";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/todos" component={Todos} />
          <Route path="/:id" component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
