import React, { Component } from "react";

class Todos extends Component {
  state = {
    todos: [
      { id: 1, content: "do this" },
      { id: 2, content: "do that" },
      { id: 3, content: "do anything" }
    ]
  };
  deleteTodo(id) {
    console.log(id);
  }

  render() {
    const todoList =
      this.state.todos.length === 0 ? (
        <p>No todos</p>
      ) : (
        this.state.todos.map(todo => {
          return (
            <p key={todo.id}>
              {todo.content}
              <input
                type="button"
                value="delete"
                onClick={() => {
                  this.deleteTodo(todo.id);
                }}
              />
            </p>
          );
        })
      );
    return todoList;
  }
}

export default Todos;
