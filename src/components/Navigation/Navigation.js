import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.NavBar}>
      <NavLink to="/" exact className={styles.link} activeClassName={styles.activeLink}>
        Vanila PhoneBook
      </NavLink>
      <NavLink to="/redux" className={styles.link} activeClassName={styles.activeLink}>
        Redux PhoneBook
      </NavLink>
      <NavLink
        to="/redux-toolkit"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Redux Toolkit PhoneBook
      </NavLink>
    </div>
  );
};

export default Navigation;