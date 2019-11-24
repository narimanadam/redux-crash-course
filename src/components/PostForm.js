import React, { useState } from "react";
import InputField from "./InputField";
import Textarea from "./Textarea";
import Button from "./Button";
import { Link } from "@reach/router";

const PostForm = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const addPost = e => {
    e.preventDefault();
    const post = {
      title: postTitle,
      body: postBody
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };
  return (
    <div className="container">
      <h1>Add Post</h1>
      <form onSubmit={addPost}>
        <InputField
          type="text"
          id="postTitle"
          placeholder="Enter Post Title"
          name="postTitle"
          label="Post title"
          handleChange={e => setPostTitle(e.target.value)}
        />
        <Textarea
          id="postBody"
          placeholder="Enter Post Body"
          name="postBody"
          label="Post Body"
          handleChange={e => setPostBody(e.target.value)}
        />
        <Button buttonStyle="primary" type="submit" text="Add Post" />
      </form>
      <Link to="/posts">
        <Button buttonStyle="secondary" type="button" text="View Posts" />
      </Link>
    </div>
  );
};

export default PostForm;
