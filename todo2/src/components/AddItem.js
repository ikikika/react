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

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.submitTodo}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddItem;
