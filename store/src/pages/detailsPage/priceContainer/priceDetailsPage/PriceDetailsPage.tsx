import React from 'react';
import { Info } from '../../../../constants/interface';

export const PriceDetailsPage = (props: Info) => {
  return (
    <h2>{`${props.price}$`}</h2>
  )
}