import React from "react";
import styles from "./superheroItem.module.css";

export default function SuperheroItem({ superhero }) {
  return (
    <div className={styles.superheroItem}>
      <img src={superhero.image.url} alt="Not found"></img>
    </div>
  );
}
