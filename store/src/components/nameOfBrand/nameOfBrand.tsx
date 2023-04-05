import React from 'react';
import { PRODUCTS } from '../../constants/constants';
import styles from './nameOfBrand.module.css'

export const NameOfBrand = () => {
  return (
    <h2 className={styles.nameOfBrand}>{PRODUCTS[0].brand}</h2>
  )
}