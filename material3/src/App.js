import React, { Component } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavBar from "./navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              My Header
            </Typography>
            <NavBar />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
