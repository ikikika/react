import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/PostActions";

import PostForm from "./PostForm";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts ? (
      this.props.posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))
    ) : (
      <div>No Articles</div>
    );
    return (
      <div>
        <PostForm />
        {postItems}
      </div>
    );
  }
}
const mapStateToProps = store => ({
  posts: store.posts.items
});
const mapDispatchToProps = { fetchPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
