import React, { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";

function App({ isLoggedIn, displayDrawer }) {
  // Define state variables to manage the login status and display drawer status
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn);
  const [isDrawerOpen, setIsDrawerOpen] = useState(displayDrawer);

  return (
    <>
      {/* Show notifications when displayDrawer is true */}
      {isDrawerOpen && <Notifications displayDrawer={displayDrawer} />}

      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-body">
          {/* Display the Login component if the user is not logged in */}
          {/* Display the CourseList component if the user is logged in */}
          {isUserLoggedIn ? <CourseList /> : <Login />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

// Define the prop types for the App component
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
};

// Set the default prop values
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export default App;
