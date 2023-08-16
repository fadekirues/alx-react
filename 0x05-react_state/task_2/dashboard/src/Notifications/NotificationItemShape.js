import PropTypes from "prop-types";

export const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});
