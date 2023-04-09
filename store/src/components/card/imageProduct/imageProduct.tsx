import React from 'react';
import { NameImage } from '../../../constants/interface';
import styles from './imageProduct.module.css';

export const ImageProduct = (props: NameImage) => {
  return (
    <img
      className={styles.image}
      src={props.image}
      alt={props.name}
    />
  )
}
