import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import styles from './ContactForm.module.css';

const ContactForm = ({ contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (checkContacts(contacts, name)) {
      toast.error(`${name} is already in contacts.`);
    } else {
      onSubmit({
        id: uuidv4(),
        name,
        number,
      });

      reset();
    }
  };

  const checkContacts = (arr, target) => {
    return arr.find(({ name }) => name.toLowerCase() === target.toLowerCase());
  };

  const changeInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.newContacsForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Add new contacts:</h2>
      <label className={styles.label}>
        <span className={styles.labelTitle}>Name:</span>
        <input
          type="text"
          onChange={changeInput}
          value={name}
          name="name"
          placeholder="input name"
          required
        />
      </label>
      <label className={styles.label}>
        <span className={styles.labelTitle}>Phone:</span>
        <input
          type="text"
          onChange={changeInput}
          value={number}
          name="number"
          placeholder="input phone number"
          required
        />
      </label>

      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

