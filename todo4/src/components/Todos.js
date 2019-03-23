import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Todos extends Component {
  state = {
    todos: [
      { id: 1, content: "kljsdf fjashfdl;kj" },
      { id: 2, content: "sdfdsfasdfsadf sd32423432 " }
    ],
    newTodo: { content: "" }
  };
  deleteTodo(id) {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ ...this.state, todos });
  }
  handleChange = e => {
    this.setState({ ...this.state, newTodo: { content: e.target.value } });
  };
  handleSubmit = e => {
    e.preventDefault();
    const todos = [
      ...this.state.todos,
      { id: Date.now(), content: this.state.newTodo.content }
    ];
    this.setState({ ...this.state, todos, newTodo: { content: "" } });
  };
  render() {
    const todoList =
      this.state.todos.length === 0 ? (
        <p>No more tasks</p>
      ) : (
        this.state.todos.map(todo => {
          return (
            <ListItem key={todo.id}>
              <ListItemText primary={todo.content} />
              <ListItemSecondaryAction onClick={() => this.deleteTodo(todo.id)}>
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })
      );

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
            <List>{todoList}</List>
          </Grid>
          <Grid item>
            <form onSubmit={this.handleSubmit}>
              <TextField
                id="standard-name"
                margin="normal"
                fullWidth
                value={this.state.newTodo.content}
                onChange={this.handleChange}
              />
              <Button color="primary" type="submit">
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default Todos;
