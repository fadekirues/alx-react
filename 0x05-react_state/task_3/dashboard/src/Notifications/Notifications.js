import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import { StyleSheet, css } from "aphrodite";


// Define the animations using Aphrodite's helper function
const fadeIn = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounce = {
  "0%, 100%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
};

// import "./Notifications.css";
const styles = StyleSheet.create({
  notificationsContainer: {
    display: "flex",
    alignItems: "center",
    position: "fixed", // Ensure the panel takes over the entire screen
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    padding: 0, // Remove padding
    backgroundColor: "white", // Set background color
    fontSize: "20px", // Set font size
  },
  notificationsList: {
    marginRight: "20px",
  },
  closeButton: {
    marginRight: "10px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    animationName: fadeIn,
    animationDuration: "1s",
    animationIterationCount: 3,
    ":hover": {
      animationName: bounce,
      animationDuration: "0.5s",
      animationIterationCount: 3,
    },
  },
  menuItemHidden: {
    display: "none",
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length !==
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  handleButtonClick() {
    console.log("Close button has been clicked");
    // Call the handleHideDrawer function when the close button is clicked
    this.props.handleHideDrawer();
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
   const { displayDrawer, listNotifications, markNotificationAsRead } =
     this.props;

    return (
      <>
        <div className="menuItem" onClick={this.props.handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notificationsContainer)}>
            <div className={css(styles.notificationsList)}>
              <p>Here is the list of notifications </p>
              <ul>
                {listNotifications.length === 0 ? (
                  <NotificationItem
                    type="default"
                    value="No new notification for now"
                  />
                ) : (
                  listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      html={notification.html}
                      value={notification.value}
                      markAsRead={() => markNotificationAsRead(notification.id)}
                    />
                  ))
                )}
              </ul>
            </div>
            <div className={css(styles.closeButton)}>
              <button aria-label="Close" onClick={this.handleButtonClick}>
                Close
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
// Add default prop values
Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

// Define prop types
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItem.propTypes),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};


export default Notifications;
