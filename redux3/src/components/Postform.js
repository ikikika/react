import React, { Component } from "react";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(post)
    })
      .then(result => result.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
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
