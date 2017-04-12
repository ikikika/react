import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  state = {
    todos: [
      { id: 1, content: "asdas sdfsfs" },
      { id: 2, content: "fsd7839hdiu sdfsfs" }
    ],
    newTodo: ""
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };
  handleChange = e => {
    this.setState({ ...this.state, newTodo: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const todos = [
      ...this.state.todos,
      { id: Date.now(), content: this.state.newTodo }
    ];
    this.setState({ todos, newTodo: "" });
  };
  render() {
    return (
      <div className="container">
        <table className="striped highlight responsive-table">
          <thead>
            <tr>
              <th>Content</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <TodoItem
              todoItems={this.state.todos}
              deleteTodoItem={this.deleteTodo}
            />
          </tbody>
        </table>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12 m10">
              <input
                id="todoitem"
                type="text"
                className="validate"
                value={this.state.newTodo}
                onChange={this.handleChange}
              />
              <label htmlFor="todoitem">Todo Item</label>
            </div>
            <div className="input-field col s12 m2">
              <button className="waves-effect waves-light btn" type="submit">
                <i className="material-icons left">add_box</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Todos;
