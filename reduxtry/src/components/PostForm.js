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
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  };
  render() {
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

const mapDispatchToProps = { createPost };

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
