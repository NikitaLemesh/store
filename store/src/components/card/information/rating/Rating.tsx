import React from 'react';
import { Info } from '../../../../constants/interface';

export const Rating = (props: Info) => {
  return (
    <p>{`Rating: ${props.rating}`}</p>
  )
} 