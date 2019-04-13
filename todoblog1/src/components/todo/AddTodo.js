import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    newTodo: ""
  };
  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };
  render() {
    return (
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
    );
  }
}

export default AddTodo;
