import React from 'react';
import { ImageProduct } from '../imageProduct/imageProduct';
import { NameOfBrand } from '../nameOfBrand/nameOfBrand';
import styles from './card.module.css';

export const Card = () => {
    return (
      <div className={styles.card}>
        <NameOfBrand />
        <ImageProduct />
      </div>
    )
}