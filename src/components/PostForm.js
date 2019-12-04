import React, { useState } from "react";
import InputField from "./InputField";
import Textarea from "./Textarea";
import Button from "./Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

const PostForm = ({ createPost }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const addPost = e => {
    e.preventDefault();

    const post = {
      title: postTitle,
      body: postBody
    };

    createPost(post);
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
    </div>
  );
};

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
