import React, { useEffect, useState } from "react";

import "./styles.css";

import Header from "../../components/Header";
import {userData} from '../../services/auth';

export default function Profile() {

  return (
    <>
      <Header />

      <div className="container" id="profileContainer">
        <h1>Meu perfil</h1>
        
        <div className="user-info">
            <img src={userData.avatarURL} alt={userData.name} className="user-avatar"/>
            <p>{userData.name}</p>
            <p>Membro desde {new Date(userData.createdAt).toLocaleDateString("pt-br", {
              dateStyle: "medium"
            })}</p>
        </div>
      </div>
    </>
  );
}
