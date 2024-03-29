import { FETCH_POSTS, NEW_POST } from "./types";
import { navigate } from "@reach/router";

// Get created posts
export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
  })
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    )
    .catch(error => console.log(error));
};

// Create Post
export const createPost = postData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => {
      dispatch({
        type: NEW_POST,
        payload: post
      });
      navigate("/");
    });
};
