import React from 'react';
import { PRODUCTS } from '../../../constants/constants';
import styles from './imageProduct.module.css';

export const ImageProduct = () => {
  return (
    <img
      className={styles.image}
      src={PRODUCTS[0].imageFirst}
      alt='nike'
    />
  )
}
