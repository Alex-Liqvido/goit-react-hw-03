// Contact.jsx

import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <div className={styles.contactRow}>
          <FaUser /> {contact.name}
        </div>
        <div className={styles.contactRow}>
          <FaPhone /> {contact.number}
        </div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;