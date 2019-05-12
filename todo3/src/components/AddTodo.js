import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    content: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state);
    this.setState({ content: "" });
  };
  handleInputChange = e => {
    this.setState({ content: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.content}
          onChange={this.handleInputChange}
        />
        <input type="submit" />
      </form>
    );
  }
}
