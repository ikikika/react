import React, { Component } from "react";
import TodoItems from "./TodoItems";
import AddItem from "./AddItem";

class Todos extends Component {
  state = {
    todos: [
      { id: 1, content: "do this" },
      { id: 2, content: "do that" },
      { id: 3, content: "do anything" }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos: todos });
  };
  addNewTodo = todo => {
    if (todo !== "") {
      const newTodo = { id: Date.now(), content: todo };
      const todos = [...this.state.todos, newTodo];
      this.setState({ todos: todos });
    }
  };
  render() {
    return (
      <div>
        <TodoItems
          todoItems={this.state.todos}
          deleteTodoItem={this.deleteTodo}
        />
        <AddItem addTodo={this.addNewTodo} />
      </div>
    );
  }
}

export default Todos;
