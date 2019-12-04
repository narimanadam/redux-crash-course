import React, { useEffect } from "react";
import PostItem from "./PostItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const Posts = ({ newPost, posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
    posts.unshift(newPost);
  }, [posts, newPost]);

  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="row">
        {posts.map(({ id, title, body }) => (
          <div className="col-md-4" key={id}>
            <PostItem title={title} body={body} />
          </div>
        ))}
      </div>
    </div>
  );
};

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.postReducer.items,
  newPost: state.postReducer.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
