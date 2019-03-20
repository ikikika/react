import React, { Component } from "react";

export default class Todos extends Component {
  state = {
    todos: [
      { id: 1, content: "kjsdflsjdf skdlfjds" },
      { id: 2, content: "12312 213123" }
    ]
  };
  deleteTodo(id) {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      content: this.input1.value
    };
    const newTodoList = [...this.state.todos, newTodo];
    this.setState({ todos: newTodoList });
    this.input1.value = "";
  }
  render() {
    const todos =
      this.state.todos.length === 0 ? (
        <tr>
          <td colSpan="3">No todos</td>
        </tr>
      ) : (
        this.state.todos.map(todo => {
          return (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.content}</td>
              <td>
                <input
                  type="button"
                  value="delete"
                  onClick={() => {
                    this.deleteTodo(todo.id);
                  }}
                />
              </td>
            </tr>
          );
        })
      );

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
          <tbody>{todos}</tbody>
        </table>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref={userInput => (this.input1 = userInput)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
