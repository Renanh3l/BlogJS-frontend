import React, { useState, useEffect } from "react";

import "./styles.css";

import Header from "../../components/Header/";
import { useHistory } from "react-router-dom";

export default function PostPage() {
  const history = useHistory();
  const [post] = useState(history.location.state.postInfo);

  useEffect(()=> {
    document.querySelector('.postMain').innerHTML = post.content;
  }, [])

  return (
    <>
      <Header />

      <div id="postPageContainer">
        <header>
          <img src={post.bannerURL} alt="" />
        </header>

        <div className="container">
          <div className="postHeader">
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>

          <div className="postMain">
          
          </div>
        </div>
      </div>
    </>
  );
}
