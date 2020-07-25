import React from 'react';
import styles from './searchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.search_container}>
        <input
          className={styles.search_input}
          type="text"
          placeholder="eg. Ironman"
        />
        <div className={styles.gradient_box}>
          <div className={styles.search_button}>
            <div>Search</div>
          </div>
        </div>
      </div>
    </div>
  );
}
