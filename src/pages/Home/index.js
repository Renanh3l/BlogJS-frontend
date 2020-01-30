import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";

import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import PostBox from "../../components/PostBox/PostBox";

import { useParams } from "react-router-dom";

import CircularProgress from '@material-ui/core/CircularProgress'

export default function Home() {
  const { page = 1 } = useParams();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPagePosts = async page => {
      setLoading(true);
      const response = await api.get(`/post/blog/${page}`);
      setPosts(response.data);
      setTimeout(()=> {setLoading(false)}, 350);
    };
    loadPagePosts(page);
    
    
  }, [page]);


  return (
    <>
      <Header />

      <div className="container">
        <section id="topSection">
          <h1>Blog</h1>
          <p>
            Nossas últimas notícias, atualizações e mais para desenvolvedores
          </p>
        </section>

        {loading ? (
          <div id="loadingContainer">
            <CircularProgress />
          </div>
        ) : (
          <section id="postsContainer">
            {posts.map(post => (
              <PostBox key={post._id} post={post} />
            ))}
          </section>
        )}

        <Pagination currentPage={parseInt(page)} />
      </div>
    </>
  );
}
