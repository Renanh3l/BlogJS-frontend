import React, { useState } from "react";

import "./styles.css";

import api from "../../services/api";
import Header from "../../components/Header";

export default function Register() {
  const [alert, setAlert] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    // Simples validação
    if (password !== password2) {
      setAlert("As senhas digitadas não são iguais.");
      return;
    }

    try {
      const response = await api.post("/users/register", {
        name: name,
        email: email,
        password: password
      });

      setAlert(response.data.message);
    } catch (err) {
      setAlert("Houve um problema no login. Verifique seus dados!");
    }
  }

  return (
    <>
      <Header />
      <div className="container" id="registerContainer">
        <h1>Registro</h1>
        <form onSubmit={handleRegister} className="registerForm">
          <span className="alert">{alert}</span>
          <div className="input-group">
            <label htmlFor="name">Nome Completo</label>
            <input
              id="name"
              onChange={e => setName(e.target.value)}
              value={name}
              required
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              required
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="password2">Confirme sua senha</label>
            <input
              id="password2"
              onChange={e => setPassword2(e.target.value)}
              value={password2}
              required
            ></input>
          </div>

          <button type="submit">Confirmar</button>
        </form>
      </div>
    </>
  );
}
