import React, { useState } from "react";

import api from "../../services/api";
import "./styles.css";
import Header from "../../components/Header";
import { login } from "../../services/auth";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/users/auth", {
        email: email,
        password: password
      });

      if (response.data.status === "success") {
        login(response.data.data);
        history.replace('/');
      } else {
        setAlert(response.data.message);
      }
    } catch (err) {
      setAlert("Houve um problema no login. Verifique seus dados!");
    }
  }

  return (
    <>
      <Header />

      <div className="container" id="loginContainer">
        <h1>Login</h1>

        <form onSubmit={handleLogin} className="loginForm">
          <span className="alert">{alert}</span>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Password">Senha</label>
            <input
              name="Password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password"
              id="Password"
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}
