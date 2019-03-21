import React, { Component } from "react";
import TodoItems from "./TodoItems";
import AddTodo from "./AddTodo";

export default class Todos extends Component {
  state = {
    todos: [
      { id: 1, content: "kjsdflsjdf skdlfjds" },
      { id: 2, content: "12312 213123" }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };
  addTodo = data => {
    const newTodo = {
      id: Date.now(),
      content: data.content
    };
    const newTodoList = [...this.state.todos, newTodo];
    this.setState({ todos: newTodoList });
  };
  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>comment</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <TodoItems
              todos={this.state.todos}
              deleteThisTodo={this.deleteTodo}
            />
          </tbody>
        </table>
        <AddTodo addNewTodo={this.addTodo} />
      </div>
    );
  }
}
