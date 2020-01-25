import React from "react";

import "./styles.css";
import { useHistory } from "react-router-dom";

function Header() {
  
  const history = useHistory();

  return (
    <header id="mainHeader">
      <div id="headerContainer">
        <a href="#" onClick={()=>{history.push('/')}}><h1>Blog JS</h1></a>
        <nav>
          <ul>
            <li>
              <button onClick={()=>{history.push('/login')}}>Login</button>
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