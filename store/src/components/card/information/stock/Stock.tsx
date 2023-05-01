import React from 'react';
import { Info } from '../../../../constants/interface';
import styles from './stock.module.css';

export const Stock = (props: Info) => {
  return (
    <li className={styles.li__stock}>{`Stock: ${props.stock}`}</li>
  )
}