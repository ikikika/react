import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    posts: []
  };
  // use lifecycle hooks componentDidMount
  // will be loaded before the DOM is rendered
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(result => {
      this.setState({ posts: result.data.slice(1, 10) });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card=content">
              <div className="card-title">{post.title}</div>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
