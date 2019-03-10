import React, { Component } from "react";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "do this" }, { id: 2, content: "do that" }]
  };

  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
