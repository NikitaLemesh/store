import React from 'react';
import { NameImage } from '../../../constants/interface';
import styles from './nameOfBrand.module.css'

export const NameOfBrand = (props: NameImage) => {
  return (
    <h2 className={styles.nameOfBrand}>{props.name}</h2>
  )
}