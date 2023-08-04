import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
// import "./Notifications.css";

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  handleButtonClick() {
    console.log("Close button has been clicked");
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const content = "<strong>Test HTML</strong>";

    return (
      <>
        <div className="menuItem">No new notification for now</div>
        {displayDrawer && (
          <div
            className="Notifications"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ marginRight: "20px" }}>
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
                      markAsRead={() => this.markAsRead(notification.id)}
                    />
                  ))
                )}
              </ul>
            </div>
            <div style={{ marginRight: "10px" }}>
              <button
                aria-label="Close"
                onClick={this.handleButtonClick}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                {/* Uncomment for visuals */}
                <img src="../close-icon.png" alt="Close" />
                Close
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

// Add a default prop value for displayDrawer (false by default)
Notifications.defaultProps = {
  displayDrawer: false,
};

// Define the prop types for the Notifications component
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItem.propTypes),
};

export default Notifications;
