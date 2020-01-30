import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <img src={comment.avatarURL} alt={comment.author} />
      <div className="commentInfo">
        <span>{comment.body}</span>
        <p>{comment.author}</p>
      </div>
    </div>
  );
};

export default Comment;
