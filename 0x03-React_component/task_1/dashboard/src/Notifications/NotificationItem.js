import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type = 'default', html, value = '' }) => {
  return (
    <>
      {type && value && !html && <li data-notification-type={type}>{value}</li>}
      {html && <li data-urgent dangerouslySetInnerHTML={{ __html: html.__html }}></li>}
    </>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
};

export default NotificationItem;
