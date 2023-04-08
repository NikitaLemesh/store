import React from 'react';
import { ImageProduct } from './imageProduct/imageProduct';
import { NameOfBrand } from './nameOfBrand/nameOfBrand';
import { Information } from './information/information';
import { ButtonAdd } from './cardButtons/buttonAdd/buttonAdd';
import { ButtonDetails } from './cardButtons/buttonDetails/buttonDetails';
import styles from './card.module.css';

export const Card = () => {
    return (
      <div className={styles.card}>
        <NameOfBrand />
        <ImageProduct />
        <Information />
        <ButtonAdd/>
        <ButtonDetails/>
      </div>
    )
}