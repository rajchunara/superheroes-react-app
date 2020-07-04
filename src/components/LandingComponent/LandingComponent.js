import React from "react";
import styles from "./landingComponent.module.css";

//Parallax effect
import Parallax from "react-rellax";

export default function LandingComponent() {
  let url1 = "/assets/Images/marvel-1.png";
  let url2 = "/assets/Images/marvel-2.png";
  let url3 = "/assets/Images/DC.png";
  let url4 = "/assets/Images/raven.png";
  let url5 = "/assets/Images/vision.png";
  let url6 = "/assets/Images/batman.png";
  let url7 = "/assets/Images/superman.png";
  return (
    <div className={styles.landingContainer}>
      <img
        className={styles.marvel2}
        src={`${process.env.PUBLIC_URL + url2}`}
        alt=""
      />
      <img
        className={styles.DC}
        src={`${process.env.PUBLIC_URL + url3}`}
        alt=""
      />
      <Parallax className={styles.marvel1} speed={4}>
        <img src={`${process.env.PUBLIC_URL + url1}`} alt="" />
      </Parallax>
      <Parallax className={styles.raven} speed={8}>
        <img src={`${process.env.PUBLIC_URL + url4}`} alt="" />
      </Parallax>

      <Parallax className={styles.vision} speed={8}>
        <img src={`${process.env.PUBLIC_URL + url5}`} alt="" />
      </Parallax>
      <img
        className={styles.batman}
        src={`${process.env.PUBLIC_URL + url6}`}
        alt=""
      />
      <img
        className={styles.superman}
        src={`${process.env.PUBLIC_URL + url7}`}
        alt=""
      />
    </div>
  );
}
