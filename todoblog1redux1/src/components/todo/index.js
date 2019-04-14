import React, { Component } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

class Todos extends Component {
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

  addTodoToState = newTodo => {
    const todos = [...this.state.todos, { id: Date.now(), content: newTodo }];
    this.setState({ todos });
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
        <AddTodo addTodo={this.addTodoToState} />
      </div>
    );
  }
}
export default Todos;
