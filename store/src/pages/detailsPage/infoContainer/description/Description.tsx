import React from 'react';
import styles from './description.module.css';
import { Info } from '../../../../constants/interface';

export const Description = (props: Info) => {
  const arrayFromProps = Object.values(props)
  return (
    <div className={styles.description}>
      <h2>{arrayFromProps[1]}</h2>
      <p>{arrayFromProps[0]}</p>
    </div>
  )
} 