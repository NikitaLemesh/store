import React from 'react';
import { Info } from '../../../../constants/interface';
import styles from './rating.module.css';

export const Rating = (props: Info) => {
  return (
    <li className={styles.li__rating}>{`Rating: ${props.rating}`}</li>
  )
} 