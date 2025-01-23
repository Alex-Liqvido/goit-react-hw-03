// SearchBox.jsx

import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;