import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <div className={css.card}>
      <div className={css.info}>
        <p><FaUser className={css.icon} /> {name}</p>
        <p><FaPhone className={css.icon} /> {number}</p>
      </div>
      <button className={css.delete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
