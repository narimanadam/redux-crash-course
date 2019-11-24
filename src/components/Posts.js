import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const Posts = ({ posts }) => {
  // const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="row">
        {posts.map(({ id, title, body }) => (
          <div className="col-md-4">
            <PostItem key={id} title={title} body={body} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
