import React from "react";

import "./styles.css";
import Header from "../../components/Header";

export default function Login() {
  return (
    <>
      <Header />

      <div className="container" id="loginContainer">
        <h1>Login</h1>

        <form onSubmit={()=>{}} className="loginForm">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input name="email" id="email" />
          </div>
          <div className="input-group">
            <label htmlFor="Password">Senha</label>
            <input name="Password" type="password" id="Password" />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}
