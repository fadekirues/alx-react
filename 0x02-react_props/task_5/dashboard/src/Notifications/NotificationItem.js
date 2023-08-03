import React from "react";
import PropTypes from "prop-types";
// import "./Notifications.css";

const NotificationItem = ({ type = "default", html, value }) => {
  return (
    <li data-notification-type={type}>
      {html ? <div dangerouslySetInnerHTML={html} /> : <span>{value}</span>}
    </li>
  );
};
// console.log(wrapper.debug());
// Define the prop types for the NotificationItem component
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string.isRequired,
};

export default NotificationItem;
