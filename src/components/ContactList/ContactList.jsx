import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contactList, onDelete }) => (
    <ul className={style.contactList}>
      {contactList.map(({ id, name, number }) => (
          <li key={id} className={style.contact}>
          {name}: {number}
              <button className={style.button} onClick={() =>onDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
);

ContactList.propTypes = {
    contactList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactList;