import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(result => result.json())
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    );
};

export const createPost = postData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(postData)
  })
    .then(result => result.json())
    .then(data =>
      dispatch({
        type: NEW_POST,
        payload: data
      })
    );
};
