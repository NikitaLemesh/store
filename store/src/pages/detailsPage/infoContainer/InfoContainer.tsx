import React from 'react';
import { Description } from './description/Description';
import { Info } from '../../../constants/interface';

export const InfoContainer  = (props: Info) => {
  return (
    <div>
      <Description description={props.description} value={'Description:'} />
      <Description rating={props.rating} value={'Rating:'} />
      <Description stock={props.stock} value={'Stock:'} />
      <Description type={props.type} value={'Type:'} />
    </div>
  )
}