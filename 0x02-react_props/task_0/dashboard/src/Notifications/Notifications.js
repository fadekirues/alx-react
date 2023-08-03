import React from "react";
import closeIcon from "../close-icon.png";
import { getLatestNotification } from "../utils/utils";
import './Notifications.css'
const Notifications = () => {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "20px" }}>
        <p>Here is the list of notifications </p>
        <ul>
          <li data-priority="default">
            The first one has a default priority and says New course available
          </li>
          <li data-priority="urgent">
            The second one has an urgent priority and says New resume available
          </li>
          <li data-priority="urgent">
            <strong
              dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
            />
          </li>
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
          <img src={closeIcon} alt="Close" />
        </button>
      </div>
    </div>
  );
};


export default Notifications;
