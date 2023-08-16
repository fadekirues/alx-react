import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  defaultItem: {
    color: "black",
    width: "100%",            // Take the entire screen width
    borderBottom: "1px solid black", // Display a black border at the bottom
    fontSize: "20px",         // Set font size
    padding: "10px 8px",      // Set padding
  },
  urgentItem: {
    color: "red",
    fontWeight: "bold",
    width: "100%",            // Take the entire screen width
    borderBottom: "1px solid black", // Display a black border at the bottom
    fontSize: "20px",         // Set font size
    padding: "10px 8px",      // Set padding
  },

});


const NotificationItem = React.memo(
  ({ id, type = "default", html, value, markAsRead }) => {
    const handleClick = () => {
      markAsRead(id);
    };

    return (
      <li
        data-notification-type={type}
        onClick={handleClick}
        className={css(
          type === "urgent" ? styles.urgentItem : styles.defaultItem
        )}
      >
        {html ? <div dangerouslySetInnerHTML={html} /> : <span>{value}</span>}
      </li>
    );
  }
);


// Define the prop types for the NotificationItem component
NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

// Set the default prop values
NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
