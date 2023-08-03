import React, { useState } from "react";
import PropTypes from "prop-types";
// import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";

// Import the CourseShape component to define the shape of each course
// import { CourseShape } from "../shapes/CourseShape";
// Import the NotificationItemShape component to define the shape of each notification
// import { NotificationItemShape } from "../shapes/NotificationItemShape";

function App({ isLoggedIn, displayDrawer }) {
  // Define state variables to manage the login status and display drawer status
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn);
  const [isDrawerOpen, setIsDrawerOpen] = useState(displayDrawer);

  // Create the listCourses array with three elements
  const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  // Create the listNotifications array with the required shape
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      type: "urgent",
      html: { __html: "<strong>Test HTML</strong>" },
      value: getLatestNotification(),
    },
  ];

  return (
    <>
      {/* Show notifications when displayDrawer is true */}
      {isDrawerOpen && (
        <Notifications
          displayDrawer={displayDrawer}
          listNotifications={listNotifications}
        />
      )}

      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-body">
          {/* Pass the listCourses array as a prop to the CourseList component */}
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
