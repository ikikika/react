import React, { Component } from "react";
import Todos from "./Todos";
class App extends Component {
  state = {
    todos: [{ id: 1, content: "do this" }, { id: 2, content: "do that" }]
  };

  // this function has to be in container component because the state is here
  // define the function and pass to ui component as prop
  deleteTodo = id => {
    console.log(id);
  };

  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
