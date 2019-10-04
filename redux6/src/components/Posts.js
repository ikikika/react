import React, { Component } from 'react';
import { connect } from "react-redux"

import { fetchPosts } from "../actions/postActions"

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const items = this.props.posts ? (
            this.props.posts.map(
                post =>
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
            )
        ) : (<p>No posts</p>);

        return (<div>
            {items}
        </div>);
    }
}

const mapStateToProps = store => ({
    posts: store.posts.items
});
const mapDispatchToProps = { fetchPosts }

export default connect(mapStateToProps, mapDispatchToProps)(Posts);