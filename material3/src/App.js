import React, { Component } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              My Header
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
