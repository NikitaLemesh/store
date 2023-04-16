import React from 'react';
import { ButtonAddToCartDetailsPage } from './buttonAddToCartDetailsPage/ButtonAddToCartDetailsPage';
import { PriceDetailsPage } from './priceDetailsPage/PriceDetailsPage';
import { Info } from '../../../constants/interface';

export const PriceContainer = (props: Info) => {
  return (
    <div>
      <PriceDetailsPage price={props.price}/>
      <ButtonAddToCartDetailsPage />
    </div>
  )
}