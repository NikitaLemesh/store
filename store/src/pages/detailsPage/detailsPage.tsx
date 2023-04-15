import React from 'react';
import style from './detailsPage.module.css';
import { ImagesContainer } from './imagesContainer/ImagesContainer';
import { idDetailsPage, PRODUCTS } from '../../constants/constants';

export const DetailsPage = () => {
  const item = PRODUCTS[idDetailsPage.id];
  return (
    <>
      <ImagesContainer imageFirst={item.imageFirst} imageSecond={item.imageSecond} imageThird={item.imageThird} name={item.brand}/>
      <p>{item.brand}</p>
    </>
  )
}