import React from "react";

import "./styles.css";

const Header = () => {
  return (
    <header id="mainHeader">
      <div id="headerContainer">
        <h1>Blog JS</h1>
        <nav>
          <ul>
            <li>
              <button onClick={()=>{}}>Login</button>
            </li>
            <li>
              <button onClick={()=>{}}>Registro</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;