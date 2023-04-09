import React from 'react';
import { Info } from '../../../../constants/interface';

export const Type = (props: Info) => {
  return (
    <p>{`Type: ${props.type}`}</p>
  )
}