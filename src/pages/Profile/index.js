import React, { useEffect, useState } from "react";

import "./styles.css";

import Header from "../../components/Header";
import {userData} from '../../services/auth';

export default function Profile() {
  const [user, setUser] = useState({});
  
  useEffect(()=> {
    function loadUser() {
      setUser(userData);
    }

    loadUser();
  }, [])
  return (
    <>
      <Header />

      <div className="container" id="profileContainer">
        <h1>Meu perfil</h1>
        
        <div className="user-info">
            <img src={user.avatarURL} alt={user.name} className="user-avatar"/>
            <p>{user.name}</p>
            <p>Membro desde {new Date(user.createdAt).toLocaleDateString("pt-br", {
              dateStyle: "medium"
            })}</p>
        </div>
      </div>
    </>
  );
}
