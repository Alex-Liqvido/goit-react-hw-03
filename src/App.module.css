// App.jsx

import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import styles from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    // Використовуємо callback для ініціалізації стану
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    return savedContacts || [];
  });
  const [filter, setFilter] = useState("");

  // Зберігаємо контакти до локального сховища при зміні масиву contacts
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.appContainer}>
      {/* Секція з пошуковим інпутом і формою */}
      <div className={styles.sidebar}>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox filter={filter} setFilter={setFilter} />
      </div>

      {/* Секція з картками контактів */}
      <div className={styles.content}>
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  );
};

export default App;