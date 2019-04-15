import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    const post = this.props.post ? (
      <React.Fragment>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.body}</p>
      </React.Fragment>
    ) : (
      <p>loading</p>
    );
    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.id);
  return {
    post: state.posts.find(post => {
      return post.id === id;
    })
  };
};

export default connect(mapStateToProps)(Post);
