import React, { Component } from 'react';
import { connect } from "react-redux"

import { newPost } from "../actions/postActions"

class PostForm extends Component {
    state = {
        title: "",
        body: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.newPost(post);
    }


    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                <input type="text" name="body" value={this.state.body} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const mapStateToProps = null;
const mapDIspatchToProps = { newPost }

export default connect(mapStateToProps, mapDIspatchToProps)(PostForm);