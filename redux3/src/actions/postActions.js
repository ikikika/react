import { FETCH_POSTS, NEW_POSTS } from "./types";

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
