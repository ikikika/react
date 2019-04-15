import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // HOC to connect this component with the redux store

class Home extends Component {
  render() {
    const posts = this.props.posts;
    const postList = posts.length ? (
      posts.map(post => {
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

// if component want access to store, we need to map the data to the props of the component
const mapStateToProps = state => {
  // the return object represents the different properties we want to add to posts
  // grab data from state (which is represented by store by the reducer) and map to props
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
