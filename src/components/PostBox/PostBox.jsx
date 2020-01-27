import React from 'react';
import { useHistory } from 'react-router-dom';

const PostBox = ({post}) => {
  const history = useHistory();

  function showPostDetails(post) {
    history.push({pathname: `/post/${post.title}`, state: {
      postInfo: post,
    }})
  }

  return (
    <div className="postBox" onClick={()=>{showPostDetails(post)}}>
      <header>
        <img src={post.bannerURL} alt="" />
        <h1>{post.title}</h1>
      </header>

      <div className="postBox-user">
        <img src={post.owner.avatarURL} alt={post.owner.name} />
        <div className="postBox-user-details">
          <span>{post.owner.name}</span>
          <span>
            {new Date(post.createdAt).toLocaleDateString("pt-br", {
              dateStyle: "medium"
            })}
          </span>
        </div>
      </div>

      <footer>
        <span>{post.description}</span>
      </footer>
    </div>
  );
};

export default PostBox;
