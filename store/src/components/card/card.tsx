import React from 'react';
import { ImageProduct } from './imageProduct/ImageProduct';
import { NameOfBrand } from './nameOfBrand/NameOfBrand';
import { Information } from './information/Information';
import { ButtonAdd } from './cardButtons/buttonAdd/ButtonAdd';
import { ICard } from '../../constants/interface';
import { ButtonDetails } from './cardButtons/buttonDetails/ButtonDetails';
import styles from './card.module.css';

export const Card = ({card}: ICard) => {
  return (
    <div className={styles.card} id={card.id.toString()}>
      <NameOfBrand name={card.brand} />
      <ImageProduct imageFirst={card.imageFirst} name={card.brand} />
      <Information stock={card.stock} type={card.type} rating={card.rating} price={card.price} />
      <ButtonAdd />
      <ButtonDetails />
    </div>
  )
}