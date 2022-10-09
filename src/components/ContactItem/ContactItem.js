import React from 'react';
import PropTypes from 'prop-types';
import { Item, ButtonClose } from './ContactItem.styled';
import { FaWindowClose } from 'react-icons/fa';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      {name}: {number}
      <ButtonClose type="button" onClick={() => onDeleteContact(id)}>
        <FaWindowClose size={32} />
      </ButtonClose>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
