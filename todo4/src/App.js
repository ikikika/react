import React from "react";
import Typography from "@material-ui/core/Typography";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Typography align="center" variant="h3">
        Task list
      </Typography>
      <Todos />
    </div>
  );
}

export default App;
