import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSuperheroByName } from '../../redux/superheroes/superheroesAction';

import styles from './searchBar.module.css';

export default function SearchBar({ toggleHeoresView }) {
  const [heroName, setHeroName] = useState('');
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setHeroName(e.target.value);
  };

  const searchHeroOnClick = () => {
    dispatch(fetchSuperheroByName(heroName));
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.search_container}>
        <input
          className={styles.search_input}
          type="text"
          placeholder="eg. Ironman"
          value={heroName}
          onChange={onInputChange}
        />
        <div
          className={styles.gradient_box}
          onClick={() => toggleHeoresView(false)}
        >
          <div
            className={styles.search_button}
            onClick={() => searchHeroOnClick()}
          >
            <div>Search</div>
          </div>
        </div>
        <div
          className={styles.all_gradient}
          onClick={() => toggleHeoresView(true)}
        >
          <div className={styles.all_heroes_button}>
            <div>All</div>
          </div>
        </div>
      </div>
    </div>
  );
}
