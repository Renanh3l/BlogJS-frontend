import React, { useState } from "react";

import "./styles.css";
import Header from "../../components/Header";
import api from '../../services/api';

import {getToken} from '../../services/auth';

export default function NewPost() {
  const [alert, setAlert] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [banner, setBanner] = useState("");

  async function handlePost(e) {
    e.preventDefault();

    console.log(content);

    try {
      const response = await api.post("/post/new", {
        title: title,
        description: description,
        bannerURL: banner,
        content: content
      }, {headers: {
          "x-access-token": getToken(),
      }});

      setAlert(response.data.message);
    } catch (err) {
      setAlert("Houve um problema no envio. Verifique os dados!");
    }
  }

  return (
    <>
      <Header />

      <div className="container" id="newpostContainer">
        <h1>Novo Post</h1>

        <form onSubmit={handlePost} className="newpostForm">
        <span className="alert">{alert}</span>
          <div className="input-group">
            <label htmlFor="title">Título</label>
            <input
              name="title"
              id="title"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Descrição</label>
            <input
              name="description"
              id="description"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Banner URL</label>
            <input
              name="banner"
              id="banner"
              onChange={e => setBanner(e.target.value)}
              value={banner}
            />
          </div>
          <div className="input-content-group">
            <label htmlFor="content">Conteúdo</label>
            <textarea
              className="contentInput"
              name="content"
              id="content"
              onChange={e => setContent(e.target.value)}
              value={content}
            />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}
