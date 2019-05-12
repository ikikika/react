import React, { Component } from "react";

class AddItem extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.content);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitTodo}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddItem;
