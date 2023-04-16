import React from 'react';
import styles from './detailsContainer.module.css';
import { IChildren } from '../../../constants/interface';

export const DetailsContainer = (props: IChildren) => {
  return (
    <div className={styles.details__container}>
      {props.children}
    </div>
  )
}