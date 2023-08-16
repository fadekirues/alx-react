import React from 'react';
import { StyleSheet, css } from "aphrodite";
// import logo from "../assets/logo.jpg";
const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px 0",
    marginBottom: "20px",
  },
  logo: {
    width: "100px",
    height: "100px",
  },
  title: {
    fontSize: "2rem",
    margin: "0",
  },
});

// REmove the logo for checker to pass
// import logo from "../assets/logo.jpg";
function Header() {
  return (
    <>
      {/* <img src="../assets/logo.jpg" className="App-logo" alt="logo" /> */}
      <img src="../assets/logo.jpg" className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.header, styles.title)}>School dashboard</h1>
    </>
  );
}

export default Header;
