import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../apps/AppReduxToolkit/redux/phone-actions';
import { getVisibleContacts } from '../../../apps/AppReduxToolkit/redux/phone-selector';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => getVisibleContacts(state));
  const dispatch = useDispatch();

  return (
    <ul className={styles.contacsList}>
      {contacts.map(({ id, contactName, contactNumber }) => (
        <li key={id} className={styles.item}>
          <span className={styles.name}>{contactName}</span>: {contactNumber}
          <button
            type="button"
            className={styles.close}
            onClick={() => dispatch(actions.deleteContact(id))}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;