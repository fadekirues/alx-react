import React from "react";
// uncomment for visuals
// import closeIcon from "../close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
// import "./Notifications.css";

const Notifications = ({ displayDrawer }) => {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };
  const content = "<strong>Test HTML</strong>";

  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div
          className="Notifications"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div style={{ marginRight: "20px" }}>
            <p>Here is the list of notifications </p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem
                type="urgent"
                html={{ __html: content }}
                value={getLatestNotification()}
              />
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
              <img src="../close-icon.png" alt="Close" />
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

export default Notifications;
