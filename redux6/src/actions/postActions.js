import { FETCH_POSTS, NEW_POST } from "./types"

export const fetchPosts = () => {
    return async dispatch => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(posts =>
                dispatch({ type: FETCH_POSTS, payload: posts })
            );
    }
}

export const newPost = (data) => {
    return async dispatch => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(post =>
                dispatch({ type: NEW_POST, payload: post })
            );
    }
}