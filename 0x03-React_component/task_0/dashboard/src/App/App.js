import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";

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
              <CourseList listCourses={listCourses} />
            ) : (
              <Login />
            )}
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
