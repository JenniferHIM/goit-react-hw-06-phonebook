import React from 'react';
import ContactForm from '../../components/PhoneBookReduxToolkit/ContactForm';
import ContactList from '../../components/PhoneBookReduxToolkit/ContactList';
import Filter from '../../components/PhoneBookReduxToolkit/Filter';
import styles from '../App.module.css';

const AppReduxToolkit = () => {
  return (
    <div className={styles.myPhonebook}>
      <h2 className={styles.bigHeader}>My phonebook</h2>
      <ContactForm />
      <Filter />
      <h2 className={styles.smallHeader}>My contacts:</h2>
      <ContactList />
    </div>
  );
};

export default AppReduxToolkit;