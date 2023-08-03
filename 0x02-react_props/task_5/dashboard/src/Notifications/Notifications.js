import React from "react";
import { NotificationItemShape } from "./NotificationItemShape";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

const Notifications = ({ displayDrawer, listNotifications }) => {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };
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
                  />
                ))
              )}
            </ul>
          </div>
          <div style={{ marginRight: "10px" }}>
            <button
              aria-label="Close"
              onClick={handleButtonClick}
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              {/* Uncomment for visuals */}
              {/* <img src={closeIcon} alt="Close" /> */}
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Add a default prop value for displayDrawer (false by default)
Notifications.defaultProps = {
  displayDrawer: false,
};

// Define the prop types for the Notifications component
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
