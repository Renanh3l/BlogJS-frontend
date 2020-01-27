import React, { useEffect, useState } from "react";

import "./styles.css";
import { useHistory } from "react-router-dom";
import { isAuthenticated, logout, userData } from "../../services/auth";

function Header() {
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(()=> {
    function loadUser() {
      setUser(userData);
    }

    loadUser();
  }, [])

  return (
    <header id="mainHeader">
      <div id="headerContainer">
        <a
          href="#"
          onClick={() => {
            history.push("/");
          }}
        >
          <h1>Blog JS</h1>
        </a>
        <nav>
          {isAuthenticated() ? (
            <ul>
              {(user !== null && user.admin === true) && (
                <li>
                  <button
                    onClick={() => {
                      history.push("/admin/newpost");
                    }}
                  >
                    Novo Post
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => {
                    history.push("/user/profile");
                  }}
                >
                  Perfil
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    history.replace("/");
                  }}
                >
                  Sair
                </button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <button
                  onClick={() => {
                    history.push("/user/login");
                  }}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    history.push("/user/register");
                  }}
                >
                  Registro
                </button>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
