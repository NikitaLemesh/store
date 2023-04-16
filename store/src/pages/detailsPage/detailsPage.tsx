import React from 'react';
import style from './detailsPage.module.css';
import { ImagesContainer } from './imagesContainer/ImagesContainer';
import { idDetailsPage, PRODUCTS } from '../../constants/constants';
import { DetailsContainer } from './detailsContainer/DetailsContainer';
import { TitleContainer } from './titleContainer/TitleContainer';
import { InfoContainer } from './infoContainer/InfoContainer';
import { PriceContainer } from './priceContainer/PriceContainer';
import { Container } from './container/Container';

export const DetailsPage = () => {
  const item = PRODUCTS[idDetailsPage.id];
  return (
    <DetailsContainer>
      <TitleContainer name={item.brand} />
      <Container>
        <ImagesContainer imageFirst={item.imageFirst} imageSecond={item.imageSecond} imageThird={item.imageThird} name={item.brand}/>
        <InfoContainer description={item.description} price={item.price} rating={item.rating} type={item.type} stock={item.stock}/>
        <PriceContainer price={item.price}/>
      </Container>
    </DetailsContainer>
  )
}