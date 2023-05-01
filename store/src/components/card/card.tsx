import React from 'react';
import { ImageProduct } from './imageProduct/ImageProduct';
import { NameOfBrand } from './nameOfBrand/NameOfBrand';
import { Information } from './information/Information';
import { ICard } from '../../constants/interface';
import { CardButtons } from './cardButtons/CardButtons';
import styles from './card.module.css';

export const Card = ({card}: ICard) => {
  return (
    <div className={styles.card} id={card.id.toString()}>
      <NameOfBrand name={card.brand} />
      <div className={styles.div__position}>
        <ImageProduct imageFirst={card.imageFirst} name={card.brand} />
        <Information stock={card.stock} type={card.type} rating={card.rating} price={card.price} />
      </div>
      <CardButtons />
    </div>
  )
}