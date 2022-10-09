import PropTypes from 'prop-types';
import { Alert } from './Notification.styled';

const Notification = ({ message }) => {
  return <Alert>{message} </Alert>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
