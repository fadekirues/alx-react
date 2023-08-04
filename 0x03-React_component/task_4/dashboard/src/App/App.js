import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

class App extends Component {
  state = {
    isUserLoggedIn: this.props.isLoggedIn,
    isDrawerOpen: this.props.displayDrawer,
  };

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      this.props.logOut();
      alert("Logging you out");
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { isUserLoggedIn, isDrawerOpen } = this.state;

    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    return (
      <>
        {isDrawerOpen && <Notifications displayDrawer={isDrawerOpen} />}

        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <div className="App-body">
            {isUserLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
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
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  logOut: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export default App;
