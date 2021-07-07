import React from 'react';
import ContactForm from '../../components/PhoneBookRedux/ContactForm';
import ContactList from '../../components/PhoneBookRedux/ContactList';
import Filter from '../../components/PhoneBookRedux/Filter';
import styles from '../App.module.css';

const AppRedux = () => {
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

export default AppRedux;