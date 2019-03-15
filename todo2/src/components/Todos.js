import React, { Component } from "react";

class Todos extends Component {
  state = {
    todos: [
      { id: 1, content: "do this" },
      { id: 2, content: "do that" },
      { id: 3, content: "do anything" }
    ]
  };
  render() {
    const todoList =
      this.state.todos.length === 0 ? (
        <p>No todos</p>
      ) : (
        this.state.todos.map(todo => {
          return <p>{todo.content}</p>;
        })
      );
    return todoList;
  }
}

export default Todos;
