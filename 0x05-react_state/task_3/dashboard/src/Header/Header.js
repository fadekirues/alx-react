import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "./path-to-context"; // Import the AppContext from the context module

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
  welcomeSection: {
    display: "none",
  },
  loggedIn: {
    display: "block",
  },
});

class Header extends Component {
  static contextType = AppContext; // Use the static contextType to access the context

  render() {
    const { user, logOut } = this.context; // Access user and logOut from the context
    const isLoggedIn = user.isLoggedIn;

    return (
      <>
        <img src="../assets/logo.jpg" className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.header, styles.title)}>School dashboard</h1>

        {/* Display welcome section only when isLoggedIn is true */}
        {isLoggedIn && (
          <section
            id="logoutSection"
            className={css(
              styles.header,
              styles.welcomeSection,
              styles.loggedIn
            )}
          >
            Welcome {user.email} (<span onClick={logOut}>logout</span>)
          </section>
        )}
      </>
    );
  }
}

export default Header;
