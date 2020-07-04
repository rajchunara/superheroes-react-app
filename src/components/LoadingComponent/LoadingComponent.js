import React from "react";
import styles from "./loadingComponent.module.css";

export default function LoadingComponent() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
