import React from "react";

const PostItem = ({ id, title, body }) => {
  return (
    <div
      className="card border-dark mb-3"
      style={{ maxWidth: "20rem" }}
      key={id}
    >
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

export default PostItem;
