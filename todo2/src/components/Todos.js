import React, { Component } from "react";
import TodoItems from "./TodoItems";

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
    if (this.input1.value !== "") {
      const newTodo = { id: Date.now(), content: this.input1.value };
      const todos = [...this.state.todos, newTodo];
      this.setState({ todos: todos });
    }
    this.input1.value = "";
  };
  render() {
    return (
      <div>
        <TodoItems todoItems={this.state.todos} />
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
