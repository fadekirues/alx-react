import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { AppContext, user, logOut } from "./AppContext";

const styles = StyleSheet.create({
  // ... (styles definitions)
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: this.props.isLoggedIn,
      displayDrawer: this.props.displayDrawer,
      user: { ...user }, // Use the default user object from the context
      logOut: logOut, // Use the logOut function from the context
      logOut: this.handleLogOut.bind(this), // Use the logOut function from the context
      logIn: this.handleLogIn.bind(this), // New logIn function
    };
    // Initialize the local state with the user object and the logOut function
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      this.props.logOut();
      alert("Logging you out");
    }
  };

  // Function to set displayDrawer to true
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  // Function to set displayDrawer to false
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // New function to handle user login
  handleLogIn(email, password) {
    // Update the user object in the state
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  // New function to handle user logout (resets the user object)
  handleLogOut() {
    this.setState({
      user: { ...user },
    });
  }

  render() {
    const { isUserLoggedIn, displayDrawer } = this.state;

    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    return (
      <AppContext.Provider value={this.state}>
        {displayDrawer && (
          <Notifications
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
        )}

        <div className={css(styles.app)}>
          <header className={css(styles.appHeader)}>
            <Header />
          </header>
          <div className={css(styles.appBody)}>
            {this.state.user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.state.logIn} />
              </BodySectionWithMarginBottom>
            )}

            <BodySectionWithMarginBottom title="News from the School">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                ex sit amet sapien tempus efficitur vel id elit. Proin varius
                arcu ut est tincidunt, a facilisis metus feugiat. Sed sagittis
                sit amet justo id laoreet. Integer in fringilla urna. Etiam in
                nulla id orci efficitur commodo sit amet non orci. Nulla ac
                consequat neque. Donec euismod vitae justo id tempus.
              </p>
            </BodySectionWithMarginBottom>
          </div>
          <div className={css(styles.appFooter)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  // logOut: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: true,
};

export default App;
