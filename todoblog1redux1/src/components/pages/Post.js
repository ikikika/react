import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +
          this.props.match.params.id
      )
      .then(result => {
        // console.log(result.data);
        this.setState({ post: result.data });
      });
  }
  render() {
    const post = this.state.post ? (
      <React.Fragment>
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.body}</p>
      </React.Fragment>
    ) : (
      <p>loading</p>
    );
    return <div className="container">{post}</div>;
  }
}

export default Post;
