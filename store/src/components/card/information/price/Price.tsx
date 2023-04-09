import React from 'react';
import { Info } from '../../../../constants/interface';

export const Price = (props: Info) => {
  return (
    <p>{`Price: ${props.price}$`}</p>
  )
}