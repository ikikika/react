import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(result => {
      const posts = result.data.slice(0, 5);
      this.setState({ posts });
    });
  }
  render() {
    const postList = this.state.posts.length ? (
      this.state.posts.map(post => {
        return (
          <div className="col s12" key={post.id}>
            <div className="card horizontal">
              <div className="card-image">
                <img
                  src="https://lorempixel.com/100/190/nature/6"
                  alt="card 123"
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <Link to={"/" + post.id}>
                    <h4>{post.title}</h4>
                  </Link>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <p>loading</p>
    );
    return <div className="container">{postList}</div>;
  }
}
