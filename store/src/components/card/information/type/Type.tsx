import React from 'react';
import styles from './type.module.css';
import { Info } from '../../../../constants/interface';

export const Type = (props: Info) => {
  return (
    <li className={styles.li__type}>{`Type: ${props.type}`}</li>
  )
}