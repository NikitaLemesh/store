import React from 'react';
import { Info } from '../../../../constants/interface';
import styles from './price.module.css';

export const Price = (props: Info) => {
  return (
    <li className={styles.li__price}>{`Price: ${props.price}$`}</li>
  )
}