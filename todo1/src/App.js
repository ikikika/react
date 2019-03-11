import React, { Component } from "react";
import Todos from "./Todos";
class App extends Component {
  state = {
    todos: [{ id: 1, content: "do this" }, { id: 2, content: "do that" }]
  };

  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">List</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
