import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

class Todos extends Component {
  state = {
    todos: [
      { id: 1, content: "kljsdf fjashfdl;kj" },
      { id: 2, content: "sdfdsfasdfsadf sd32423432 " }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  //   handleSubmit = e => {
  //     e.preventDefault();

  //   };
  addItem = data => {
    const todos = [
      ...this.state.todos,
      { id: Date.now(), content: data.content }
    ];
    this.setState({ todos });
  };
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={24}
      >
        <Grid item md={4} xs={12}>
          <Grid item>
            <List>
              <TodoList
                listItems={this.state.todos}
                deleteItem={this.deleteTodo}
              />
            </List>
          </Grid>

          <Grid item>
            <AddTodo addTodo={this.addItem} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default Todos;
