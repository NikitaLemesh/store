import React from 'react';
import { Info } from '../../../../constants/interface';

export const Stock = (props: Info) => {
  return (
    <p>{`Stock: ${props.stock}`}</p>
  )
}