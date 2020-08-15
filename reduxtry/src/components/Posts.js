import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/PostActions";

import PostForm from "./PostForm";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.newPost);
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
    return true;
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
  posts: store.posts.items,
  newPost: store.posts.item
});
const mapDispatchToProps = { fetchPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
