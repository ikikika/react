import React, { Component } from "react";

class Todo extends Component {
  state = {
    todos: [
      { id: 1, content: "asdas sdfsfs" },
      { id: 2, content: "fsd7839hdiu sdfsfs" }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };
  render() {
    const todoList = this.state.todos.length ? (
      this.state.todos.map(todo => {
        return (
          <tr key={todo.id}>
            <td>{todo.content}</td>
            <td>
              <button
                className="waves-effect waves-light btn"
                onClick={() => this.deleteTodo(todo.id)}
              >
                <i className="material-icons left">delete</i>
              </button>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan="2">No todos</td>
      </tr>
    );
    return (
      <div className="container">
        <table className="striped highlight responsive-table">
          <thead>
            <tr>
              <th>Content</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{todoList}</tbody>
        </table>
      </div>
    );
  }
}
export default Todo;
