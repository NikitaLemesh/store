import React from 'react';
import { Description } from './description/Description';
import { Info } from '../../../constants/interface';

export const InfoContainer  = (props: Info) => {
  return (
    <div>
      <Description />
    </div>
  )
}