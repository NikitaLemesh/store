import React from 'react';
import styles from './description.module.css';
import { Info } from '../../../../constants/interface';

export const Description = (props: Info) => {
  return (
    <div className={styles.description}>
      <h2>Description:</h2>
      <p>{props.description}</p>
    </div>
  )
} 