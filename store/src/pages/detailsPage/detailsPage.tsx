import React from 'react';
import style from './detailsPage.module.css';
import { ImagesContainer } from './imagesContainer/ImagesContainer';
import { idDetailsPage, PRODUCTS } from '../../constants/constants';
import { DetailsContainer } from './detailsContainer/DetailsContainer';
import { TitleContainer } from './titleContainer/TitleContainer';

export const DetailsPage = () => {
  const item = PRODUCTS[idDetailsPage.id];
  return (
    <DetailsContainer>
      <TitleContainer name={item.brand} />
      <ImagesContainer imageFirst={item.imageFirst} imageSecond={item.imageSecond} imageThird={item.imageThird} name={item.brand}/>
    </DetailsContainer>
  )
}