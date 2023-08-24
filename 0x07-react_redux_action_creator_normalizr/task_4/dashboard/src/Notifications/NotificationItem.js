import React, { Component} from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    const styles = StyleSheet.create({
      notificationItem: {
        color: '#0d0563',
        "@media (max-width: 450px)": {
          borderBottom: "1px solid black",
          listStyle: "none",
          fontSize: "20px",
          padding: "10px 8px",
        },
      },
      urgent: {
        color: '#e0354b',
        "@media (max-width: 450px)": {
          borderBottom: "1px solid black",
          listStyle: "none",
          fontSize: "20px",
          padding: "10px 8px",
        },
      },
    });
    
    const notificationItemClass = css(
      styles.notificationItem,
      type === 'urgent' && styles.urgent,
    );

    return (
      <>
        {type && value ? (
          <li 
          className={notificationItemClass}
          onClick={() => markAsRead(id)} 
          data-notification-type={type}
          >
            {value}
          </li>
        ) : null}
        {html ? (
        <li 
        className={css(styles.notificationItem, styles.urgent)}
        onClick={() => markAsRead(id)} 
        data-urgent 
        dangerouslySetInnerHTML={{ __html: html }}
        ></li> 
        ): null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};

export default NotificationItem;