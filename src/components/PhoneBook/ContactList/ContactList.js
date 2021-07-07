import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.item}>
        <span className={styles.name}>{name}</span>: {number}
        <button
          type="button"
          className={styles.close}
          onClick={() => onDelete(id)}
        ></button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
