import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class AddTodo extends Component {
  state = { content: "" };
  handleChange = e => {
    this.setState({ content: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="standard-name"
          margin="normal"
          fullWidth
          value={this.state.content}
          onChange={this.handleChange}
        />
        <Button color="primary" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}
