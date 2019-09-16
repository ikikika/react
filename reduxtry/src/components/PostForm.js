import React, { Component } from "react";
import { connect } from "react-redux";

import { createPost } from "../actions/PostActions";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <br />
          <textarea
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
