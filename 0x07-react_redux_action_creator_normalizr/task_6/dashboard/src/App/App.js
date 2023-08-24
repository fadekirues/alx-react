/* eslint-disable semi */
import React, { useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList'
import BodySection from '../BodySection/BodySection'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import { getLatestNotification } from '../utils/utils'
import { defaultUser, AppContext } from './AppContext'

function App () {
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const [user, setUser] = useState(defaultUser);
  const [listNotifications, setListNotifications] = useState([
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
  ]);

  const logOut = () => {
    setUser(defaultUser);
  };

  const logIn = (email, password) => {
    setUser({ email, password, isLoggedIn: true });
  };

  const markNotificationAsRead = (id) => {
    setListNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const handleDisplayDrawer = () => {
    setDisplayDrawer(true);
  };

  const handleHideDrawer = () => {
    setDisplayDrawer(false);
  };

  const contextValue = { user, logOut, markNotificationAsRead };

  return (
    <AppContext.Provider value={contextValue}>
      <Notifications
        listNotifications={listNotifications}
        displayDrawer={displayDrawer}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
      <div className={css(styles.app)}>
        <Header />
        {user.isLoggedIn ? <hr className={css(styles.hr)} /> : null}
        {user.isLoggedIn
          ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
            )
          : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={logIn} />
          </BodySectionWithMarginBottom>
            )}
        <BodySection title={!user.isLoggedIn ? 'News from the School' : ''}>

        {!user.isLoggedIn
          ? <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis at tempora odio, necessitatibus repudiandae
            reiciendis cum nemo sed asperiores ut molestiae eaque
            aliquam illo ipsa iste vero dolor voluptates.
          </p>
          : null}
        </BodySection>
        <Footer styles={[styles.footer]} />
      </div>
    </AppContext.Provider>
  );
}

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const styles = StyleSheet.create({
  app: { fontFamily: 'Arial' },

  hr: {
    height: '2px',
    backgroundColor: '#E0344B',
    border: 'none'
  },

  footer: {
    height: '50px',
    fontStyle: 'italic',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
