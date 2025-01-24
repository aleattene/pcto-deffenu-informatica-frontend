import React from 'react';
import "./Logo.css";
import logo from './../../assets/img/logo.png'

function LogoWithText() {
  return (
    <div id="container-logo">
      {/* Logo */}
      <img id="logo-img"
        /* Path da cui recuperare la risorsa */
        src={logo} 
        /* Placeholder che viene scritto se immagine non trovata */
        alt="Logo SM" 
      />
      {/* Testo */}
      <span id="logo-description">Sport Management </span> 
    </div>
  );
}

export default LogoWithText;
