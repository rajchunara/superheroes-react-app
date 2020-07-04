import React from "react";
import styles from "./heroDetails.module.css";

export function PowerStats({ powerstats }) {
  return (
    <div className={styles.powerstats}>
      <div className={styles.powerstatsTitle}>Powerstats</div>
      <div
        className={styles.property}
      >{`Intelligence : ${powerstats.intelligence}`}</div>
      <div
        className={styles.property}
      >{`Strength : ${powerstats.strength}`}</div>
      <div className={styles.property}>{`Speed : ${powerstats.speed}`}</div>
      <div
        className={styles.property}
      >{`Durability : ${powerstats.durability}`}</div>
      <div className={styles.property}>{`Power : ${powerstats.power}`}</div>
      <div className={styles.property}>{`Combat : ${powerstats.combat}`}</div>
    </div>
  );
}

export function Biography({ biography }) {
  return (
    <div className={styles.biography}>
      <div className={styles.biographyTitle}>Biography</div>
      <div
        className={styles.property}
      >{`Full Name : ${biography["full-name"]}`}</div>
      <div
        className={styles.property}
      >{`Place of Birth : ${biography["place-of-birth"]}`}</div>
      <div
        className={styles.property}
      >{`Publisher : ${biography["publisher"]}`}</div>
      <div
        className={styles.property}
      >{`Alignment : ${biography.alignment}`}</div>
    </div>
  );
}

export function Work({ work }) {
  return (
    <div className={styles.work}>
      <div className={styles.workTitle}>Work</div>
      <div className={styles.property}>{`Occupation : ${work.occupation}`}</div>
      <div className={styles.property}>{`Base : ${work.base}`}</div>
    </div>
  );
}
export function Connections({ connections }) {
  return (
    <div className={styles.connections}>
      <div className={styles.connectionsTitle}>Connections</div>
      <div
        className={styles.property}
      >{`Group Affiliation : ${connections["group-affiliation"]}`}</div>
      <div
        className={styles.property}
      >{`Relatives : ${connections["relatives"]}`}</div>
    </div>
  );
}
