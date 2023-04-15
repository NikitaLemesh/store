import React from 'react';
import { NameImages } from '../../../constants/interface';
import styles from './imageProduct.module.css';

export const ImageProduct = (props: NameImages) => {
  return (
    <img
      className={styles.image}
      src={props.imageFirst}
      alt={props.name}
    />
  )
}
