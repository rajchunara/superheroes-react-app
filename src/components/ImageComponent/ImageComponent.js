import React from "react";
import styles from "./imageComponent.module.css";

export default function ImageComponent({ imageURL }) {
  return (
    <>
      <div className={styles.imageNotFound}>
        <div className={styles.imageNotFoundText}>Image Not Found</div>
      </div>
      <div
        className={styles.imageContainer}
        style={{ background: `url(${imageURL}) no-repeat` }}
      ></div>
    </>
  );
}
