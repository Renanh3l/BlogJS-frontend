import React, { useState, useEffect } from "react";

import "./styles.css";

import Header from "../../components/Header/";
import Comment from "../../components/Comment";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useParams, useHistory } from "react-router-dom";

import api from "../../services/api";
import { getToken, logout } from "../../services/auth";

export default function PostPage() {
  const history = useHistory();
  const [post, setPost] = useState({_id: null});
  const { postId } = useParams();
  const [commentBody, setCommentBody] = useState("");

  // Pega as informações do post com o parâmetro do título
  useEffect(() => {
    async function retrievePost() {
      try {
        const response = await api.get(`/post/${postId}`);

        console.log(response.data);

        if (response.data.status === "success") {
          setPost(response.data.data);
        } else {
          console.log(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    }

    retrievePost();
  }, []);

  // Exibir conteúdo do post
  useEffect(() => {
    if (post._id) {
      document.querySelector("#postMain").innerHTML = post.content;
    }
  }, [post]);

  // Não renderizar até pegarmos o post
  if (!post._id) {
    return (
      <>
        <Header />
        <div className="loadingPost">
          <CircularProgress size={100} />
        </div>
      </>
    );
  }

  async function handleComment(e) {
    e.preventDefault();

    try {

      setPost({_id: null});

      const response = await api.put(
        `/post/comment/${post._id}`,
        {
          body: commentBody
        },
        {
          headers: {
            "x-access-token": getToken()
          }
        }
      );

      if (response.data.status === "success") {
        console.log("Comentário adicionado!");
        let newPost = post;
        newPost.comments = [...response.data.data];
        setPost(newPost);
      } else {
        if (response.data.message === "jwt expired") {
          logout();
          history.push('/user/login');
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

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

          <div id="postMain"></div>

          <div className="postComments">
            <form onSubmit={handleComment} className="writeComment">
              <textarea
                value={commentBody}
                onChange={e => setCommentBody(e.target.value)}
                placeholder="Escreva um comentário..."
                required
              ></textarea>
              <button type="submit">Enviar</button>
            </form>

            {post.comments.map(comment => (
              <Comment comment={comment} key={comment._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
