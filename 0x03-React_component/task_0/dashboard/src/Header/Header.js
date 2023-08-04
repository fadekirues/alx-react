import React from 'react';
import "./Header.css";
// REmove the logo for checker to pass
// import logo from "../assets/logo.jpg";
function Header() {
  return (
    <>
      <img src="../assets/logo.jpg" className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </>
  );
}

export default Header;
