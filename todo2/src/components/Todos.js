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
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos: todos });
  }
  submitTodo = e => {
    e.preventDefault();
    console.log(this.input1.value);
    this.input1.value = "";
  };
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
    return (
      <div>
        <div>{todoList}</div>
        <div>
          <form onSubmit={this.submitTodo}>
            <input type="text" ref={userInput => (this.input1 = userInput)} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Todos;
