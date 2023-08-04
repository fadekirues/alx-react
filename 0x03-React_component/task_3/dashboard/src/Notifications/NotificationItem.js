import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./Notifications.css";

class NotificationItem extends Component {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };

  render() {
    const { type = "default", html, value } = this.props;
    return (
      <li data-notification-type={type} onClick={this.handleClick}>
        {html ? <div dangerouslySetInnerHTML={html} /> : <span>{value}</span>}
      </li>
    );
  }
}

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
