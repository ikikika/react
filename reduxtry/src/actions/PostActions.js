import { FETCH_POSTS } from "./types";

export const fetchArticles = () => {
  return async dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };
};
