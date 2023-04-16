import React from 'react';
import { NameImages } from '../../../constants/interface';
import styles from './nameOfBrand.module.css'

export const NameOfBrand = (props: NameImages) => {
  return (
    <h2 className={styles.name__brand}>{props.name}</h2>
  )
}