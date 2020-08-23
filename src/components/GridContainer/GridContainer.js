import React from 'react';
import styles from './gridContainer.module.css';

export default function GridContainer(props) {
  return <div className={styles.gridContainer}>{props.children}</div>;
}
