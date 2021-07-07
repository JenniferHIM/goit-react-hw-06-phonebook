import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../apps/AppReduxToolkit/redux/phone-actions';
import { getContacts } from '../../../apps/AppReduxToolkit/redux/phone-selector';

import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const contacts = useSelector(state => getContacts(state));
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (checkContacts(contacts, contactName)) {
      toast.error(`${contactName} is already in contacts.`);
    } else {
      dispatch(
        actions.addContact({
          id: uuidv4(),
          contactName,
          contactNumber,
        }),
      );

      reset();
    }
  };

  const checkContacts = (arr, target) => {
    return arr.find(
      ({ contactName }) => contactName.toLowerCase() === target.toLowerCase(),
    );
  };

  const changeInput = ({ target: { name, value } }) =>
    name === 'name' ? setContactName(value) : setContactNumber(value);

  const reset = () => {
    setContactName('');
    setContactNumber('');
  };

  return (
    <form className={styles.newContacsForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Add new contacts:</h2>
      <label className={styles.label}>
        <span className={styles.labelTitle}>Name:</span>
        <input
          type="text"
          onChange={changeInput}
          value={contactName}
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
          value={contactNumber}
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

export default ContactForm;