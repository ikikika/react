import React, { Component } from "react";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={e => this.formSubmit(e)}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <br />
          <textarea
            onChange={this.onChange}
            name="body"
            value={this.state.body}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
